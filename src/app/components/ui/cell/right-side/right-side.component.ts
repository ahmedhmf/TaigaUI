import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiIcon, TuiLoader, TuiTitle } from '@taiga-ui/core';
import {
  TuiAvatar,
  TuiBadgeNotification,
  TuiCheckbox,
  TuiSensitive,
  TuiTooltip,
} from '@taiga-ui/kit';
import { TuiCell } from '@taiga-ui/layout';

@Component({
  selector: 'app-right-side',
  imports: [
    FormsModule,
    TuiAvatar,
    TuiBadgeNotification,
    TuiCell,
    TuiCheckbox,
    TuiIcon,
    TuiLoader,
    TuiSensitive,
    TuiTitle,
    TuiTooltip,
  ],
  templateUrl: './right-side.component.html',
  styleUrl: './right-side.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightSideComponent {
  protected value = false;
}
