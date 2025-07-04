import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiDayOfWeek } from '@taiga-ui/cdk';
import { TUI_FIRST_DAY_OF_WEEK, TuiCalendar } from '@taiga-ui/core';

@Component({
  selector: 'app-localization',
  imports: [TuiCalendar],
  templateUrl: './localization.component.html',
  styleUrl: './localization.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TUI_FIRST_DAY_OF_WEEK,
      useValue: TuiDayOfWeek.Sunday,
    },
  ],
})
export class LocalizationComponent {}
