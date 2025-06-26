import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import { TuiTextfield } from '@taiga-ui/core';
import { TuiInputDate } from '@taiga-ui/kit';

@Component({
  selector: 'app-limits',
  imports: [FormsModule, TuiInputDate, TuiTextfield],
  templateUrl: './limits.component.html',
  styleUrl: './limits.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LimitsComponent {
  protected value: TuiDay | null = null;

  protected readonly today = TuiDay.currentLocal();
  protected readonly min = new TuiDay(this.today.year, this.today.month, 1);
  protected readonly max = this.min.append({ month: 1, day: -1 });

  protected readonly handler = (day: TuiDay): boolean =>
    day.daySame(this.today);
}
