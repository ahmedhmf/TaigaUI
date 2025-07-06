import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { TuiDay } from '@taiga-ui/cdk';
import { TuiCalendar } from '@taiga-ui/core';

@Component({
  selector: 'app-basic',
  imports: [TuiCalendar],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicComponent {
  protected value: TuiDay | null = null;

  protected onDayClick(day: TuiDay): void {
    this.value = day;
  }
}
