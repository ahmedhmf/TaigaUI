import { KeyValuePipe, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import { TuiDataList, TuiTextfield } from '@taiga-ui/core';
import { TuiInputDate } from '@taiga-ui/kit';

@Component({
  selector: 'app-data-list',
  imports: [
    FormsModule,
    KeyValuePipe,
    NgForOf,
    TuiDataList,
    TuiInputDate,
    TuiTextfield,
  ],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataListComponent {
  protected readonly today = TuiDay.currentLocal();
  protected value: TuiDay | null = this.today;
  protected dates = {
    Today: this.today,
    Tomorrow: this.today.append({ day: 1 }),
    'End of week': this.today.append({ day: 6 - this.today.dayOfWeek() }),
    'End of month': new TuiDay(this.today.year, this.today.month, 1).append({
      month: 1,
      day: -1,
    }),
    'End of Year': new TuiDay(this.today.year + 1, 0, 1).append({ day: -1 }),
  };

  protected asIs(): number {
    return 0;
  }
}
