import {
  afterNextRender,
  DestroyRef,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

interface IntersectionEntry {
  target: HTMLElement;
  isIntersecting: boolean;
}

@Directive({
  selector: '[observeVisibility]',
})
export class ObserveVisibilityDirective {
  currentIndex = input<number>(0, { alias: 'observeVisibility' });

  readonly threshold = input<number>(1);
  readonly visible = output<HTMLElement>();

  private observer: IntersectionObserver | undefined;
  private intersectionEntry = signal<IntersectionEntry | null>(null);

  private element = inject(ElementRef);
  private destroyRef = inject(DestroyRef);
  private dashboardService = inject(DashboardService);

  constructor() {
    this.createObserver();

    afterNextRender(() => {
      this.startObservingElements();
    });

    effect(() => {
      const entry = this.intersectionEntry();
      if (!entry) return;

      if (entry.isIntersecting) {
        this.checkVisibilityAndEmit(entry.target);
      }
    });
  }

  private checkVisibilityAndEmit(target: HTMLElement) {
    if (
      this.currentIndex() + 1 ===
      this.dashboardService.componentItems().length
    ) {
      this.visible.emit(target);
    }
  }

  private createObserver() {
    const options = {
      rootMargin: '0px',
      threshold: this.threshold(),
    };

    const isFullyVisible = (entry: IntersectionObserverEntry) =>
      entry.intersectionRatio === 1;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (isFullyVisible(entry)) {
          this.intersectionEntry.set({
            target: entry.target as HTMLElement,
            isIntersecting: true,
          });
        } else {
          this.intersectionEntry.set({
            target: entry.target as HTMLElement,
            isIntersecting: false,
          });
        }
      });
    }, options);

    this.destroyRef.onDestroy(() => {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = undefined;
      }
    });
  }

  private startObservingElements() {
    if (!this.observer) {
      return;
    }

    this.observer.observe(this.element.nativeElement);
  }
}
