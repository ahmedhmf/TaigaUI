import type { TuiDay } from '@taiga-ui/cdk';
import { TuiDayRange, TuiMonth } from '@taiga-ui/cdk';
import { TuiCalendar } from '@taiga-ui/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-range',
  imports: [TuiCalendar],
  templateUrl: './range.component.html',
  styleUrl: './range.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RangeComponent {
  protected value: TuiDayRange | null = null;

  protected firstMonth = TuiMonth.currentLocal();

  protected middleMonth = TuiMonth.currentLocal().append({ month: 1 });

  protected lastMonth = TuiMonth.currentLocal().append({ month: 2 });

  protected hoveredItem: TuiDay | null = null;

  protected onDayClick(day: TuiDay): void {
    if (!this.value?.isSingleDay) {
      this.value = new TuiDayRange(day, day);
    }

    this.value = TuiDayRange.sort(this.value.from, day);
  }

  protected onMonthChangeFirst(month: TuiMonth): void {
    this.firstMonth = month;
    this.middleMonth = month.append({ month: 1 });
    this.lastMonth = month.append({ month: 2 });
  }

  protected onMonthChangeMiddle(month: TuiMonth): void {
    this.firstMonth = month.append({ month: -1 });
    this.middleMonth = month;
    this.lastMonth = month.append({ month: 1 });
  }

  protected onMonthChangeLast(month: TuiMonth): void {
    this.firstMonth = month.append({ month: -2 });
    this.middleMonth = month.append({ month: -1 });
    this.lastMonth = month;
  }
}
