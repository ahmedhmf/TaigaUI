import {
  afterNextRender,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  input,
  linkedSignal,
  output,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, filter, Subject, tap } from 'rxjs';

@Directive({
  selector: '[observeVisibility]',
})
export class ObserveVisibilityDirective {
  readonly totalItems = input.required<number>();
  readonly currentIndex = input<number>(0, { alias: 'observeVisibility' });
  readonly debounceTimeMs = input<number>(0);
  readonly threshold = input<number>(1);
  readonly visible = output<HTMLElement>();

  private observer: IntersectionObserver | undefined;
  private visibleElements$ = new Subject<HTMLElement>();
  private elementRef = inject(ElementRef<HTMLElement>);
  private destroyRef = inject(DestroyRef);

  private readonly isBoundaryItem = linkedSignal<number, boolean>({
    source: () => this.totalItems(),
    computation: (total) => this.currentIndex() + 1 === total,
  });

  constructor() {
    this.createObserver();

    afterNextRender(() => {
      this.startObserving();
    });

    this.destroyRef.onDestroy(() => {
      this.observer?.disconnect();
      this.visibleElements$.complete();
    });
  }

  private createObserver() {
    if (this.observer) {
      this.observer.disconnect();
    }

    const options: IntersectionObserverInit = {
      rootMargin: '0px',
      threshold: this.threshold(),
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio === 1) {
          this.visibleElements$.next(entry.target as HTMLElement);
        }
      });
    }, options);
  }

  private startObserving() {
    if (!this.observer) {
      return;
    }

    this.observer.observe(this.elementRef.nativeElement);

    this.visibleElements$
      .pipe(
        debounceTime(this.debounceTimeMs()),
        filter(() => this.isBoundaryItem()),
        tap((element: HTMLElement) => {
          if (this.isElementStillFullyVisible(element)) {
            this.visible.emit(element);
            this.observer?.unobserve(element);
          }
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  private isElementStillFullyVisible(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    const fullyVisible =
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    return fullyVisible;
  }
}
