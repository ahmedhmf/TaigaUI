import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiDataList, TuiScrollable, TuiTextfield } from '@taiga-ui/core';
import { TUI_COUNTRIES, TuiChevron, TuiSelect } from '@taiga-ui/kit';
import { map } from 'rxjs';

@Component({
  selector: 'app-select-virtual-scroll',
  imports: [
    AsyncPipe,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
    FormsModule,
    TuiChevron,
    TuiDataList,
    TuiScrollable,
    TuiSelect,
    TuiTextfield,
  ],
  templateUrl: './select-virtual-scroll.component.html',
  styleUrl: './select-virtual-scroll.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectVirtualScrollComponent {
  protected readonly countries = inject(TUI_COUNTRIES).pipe(map(Object.values));
  protected value = null;
}
