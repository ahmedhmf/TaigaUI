import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  TuiAppearance,
  TuiButton,
  TuiIcon,
  TuiLoader,
  TuiTitle,
} from '@taiga-ui/core';
import { TuiBadgeNotification, TuiCheckbox, TuiTooltip } from '@taiga-ui/kit';
import { TuiCell } from '@taiga-ui/layout';

@Component({
  selector: 'app-disabled-state',
  imports: [
    FormsModule,
    TuiAppearance,
    TuiBadgeNotification,
    TuiButton,
    TuiCell,
    TuiCheckbox,
    TuiIcon,
    TuiLoader,
    TuiTitle,
    TuiTooltip,
  ],
  templateUrl: './disabled-state.component.html',
  styleUrl: './disabled-state.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledStateComponent {
  protected value = false;
}
