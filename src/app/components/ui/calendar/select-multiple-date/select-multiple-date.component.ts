import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { TuiDay } from '@taiga-ui/cdk';
import { TuiCalendar } from '@taiga-ui/core';

@Component({
  selector: 'app-select-multiple-date',
  imports: [TuiCalendar],
  templateUrl: './select-multiple-date.component.html',
  styleUrl: './select-multiple-date.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectMultipleDateComponent {
  protected value: readonly TuiDay[] = [];

  protected onDayClick(day: TuiDay): void {
    this.value = this.value.find((item) => item.daySame(day))
      ? this.value.filter((item) => !item.daySame(day))
      : this.value.concat(day);
  }
}
