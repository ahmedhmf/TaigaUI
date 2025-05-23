import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiScrollable, TuiScrollbar } from '@taiga-ui/core';

@Component({
  selector: 'app-scrollbar-virtual',
  imports: [
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
    TuiScrollable,
    TuiScrollbar,
  ],
  templateUrl: './scrollbar-virtual.component.html',
  styleUrl: './scrollbar-virtual.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollbarVirtualComponent {
  protected items = Array.from({ length: 10000 }).map((_, i) => `Item #${i}`);

  protected add(): void {
    this.items = [...this.items, `Item #${this.items.length}`];
  }
}
