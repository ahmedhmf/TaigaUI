import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { TuiDay, TuiHandler } from '@taiga-ui/cdk';
import { TUI_DAY_TYPE_HANDLER, TuiCalendar } from '@taiga-ui/core';

const handler: TuiHandler<TuiDay, string> = (day: TuiDay) => {
  if (day.day === 10) {
    return 'holiday';
  }

  return day.isWeekend ? 'weekend' : 'weekday';
};

@Component({
  selector: 'app-color-custom',
  imports: [TuiCalendar],
  templateUrl: './color-custom.component.html',
  styleUrl: './color-custom.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: TUI_DAY_TYPE_HANDLER, useValue: handler }],
})
export class ColorCustomComponent {}
