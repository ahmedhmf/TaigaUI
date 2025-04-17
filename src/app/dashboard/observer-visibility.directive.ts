import {
  afterNextRender,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  input,
  output,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  delay,
  EMPTY,
  filter,
  Observable,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { DashboardService } from '../services/dashboard.service';

@Directive({
  selector: '[observeVisibility]',
})
export class ObserveVisibilityDirective {
  currentIndex = input<number>(0, { alias: 'observeVisibility' });

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
  private dashboardService = inject(DashboardService);

  constructor() {
    this.createObserver();

    afterNextRender(() => {
      this.startObservingElements();
    });
  }

  private isVisible(element: HTMLElement): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      const intersectionObserver = new IntersectionObserver(([entry]) => {
        observer.next(entry.intersectionRatio === 1);
        observer.complete();
        intersectionObserver.disconnect();
      });

      intersectionObserver.observe(element);

      return () => {
        intersectionObserver.disconnect();
      };
    });
  }

  private createObserver() {
    const options = {
      rootMargin: '0px',
      threshold: this.threshold(),
    };

    const isIntersecting = (entry: IntersectionObserverEntry) =>
      entry.isIntersecting || entry.intersectionRatio > 0;

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (isIntersecting(entry)) {
          this.subject$.next({ entry, observer });
        }
      });
    }, options);

    // Cleanup observer on destroy
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
        switchMap(({ entry, observer }) => {
          const target = entry.target as HTMLElement;

          return this.isVisible(target).pipe(
            filter(Boolean),
            tap(() => {
              if (
                this.currentIndex() + 1 ===
                this.dashboardService.componentItems().length
              ) {
                this.visible.emit(target);
              }
              observer.unobserve(target);
            })
          );
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }
}
