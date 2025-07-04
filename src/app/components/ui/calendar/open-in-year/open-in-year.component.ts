import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { TuiDay } from '@taiga-ui/cdk';
import { TuiCalendar } from '@taiga-ui/core';

@Component({
  selector: 'app-open-in-year',
  imports: [TuiCalendar],
  templateUrl: './open-in-year.component.html',
  styleUrl: './open-in-year.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpenInYearComponent {
  protected value: TuiDay | null = null;

  protected onDayClick(day: TuiDay): void {
    this.value = day;
  }
}
