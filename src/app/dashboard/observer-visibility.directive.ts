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
import { delay, filter, Subject } from 'rxjs';

@Directive({
  selector: '[observeVisibility]',
})
export class ObserveVisibilityDirective {
  readonly totalItems = input.required<number>();
  readonly currentIndex = input<number>(0, { alias: 'observeVisibility' });
  readonly debounceTime = input<number>(0);

  readonly threshold = input<number>(1);
  readonly visible = output<HTMLElement>();

  private observer: IntersectionObserver | undefined;
  private subject$ = new Subject<{
    entry: IntersectionObserverEntry;
    observer: IntersectionObserver;
  }>();
  private element = inject(ElementRef);
  private destroyRef = inject(DestroyRef);

  private readonly isBoundaryItem = linkedSignal<number, boolean>({
    source: () => this.totalItems(),
    computation: (totalItems) => this.currentIndex() + 1 === totalItems,
  });

  constructor() {
    this.createObserver();

    afterNextRender(() => {
      this.startObservingElements();
    });
  }

  private createObserver() {
    const options = {
      rootMargin: '0px',
      threshold: this.threshold(),
    };

    const isFullyVisible = (entry: IntersectionObserverEntry) =>
      entry.intersectionRatio === 1;

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (isFullyVisible(entry)) {
          this.subject$.next({ entry, observer });
        }
      });
    }, options);

    this.destroyRef.onDestroy(() => {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = undefined;
      }

      this.subject$.complete();
    });
  }

  private startObservingElements() {
    if (!this.observer) {
      return;
    }

    this.observer.observe(this.element.nativeElement);

    this.subject$
      .pipe(
        delay(this.debounceTime()),
        filter(Boolean),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(async ({ entry, observer }) => {
        const target = entry.target as HTMLElement;
        const isStillVisible = await this.isVisible(target);

        if (isStillVisible && this.isBoundaryItem()) {
          this.visible.emit(target);
          observer.unobserve(target);
        }
      });
  }

  private isVisible(element: HTMLElement) {
    return new Promise((resolve) => {
      const observer = new IntersectionObserver(([entry]) => {
        resolve(entry.intersectionRatio === 1);
        observer.disconnect();
      });

      observer.observe(element);
    });
  }
}
