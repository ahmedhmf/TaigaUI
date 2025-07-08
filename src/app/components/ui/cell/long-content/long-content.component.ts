import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiIcon, TuiTitle } from '@taiga-ui/core';
import {
  TuiAvatar,
  TuiBadge,
  TuiBadgeNotification,
  TuiFade,
} from '@taiga-ui/kit';
import { TuiCell } from '@taiga-ui/layout';

@Component({
  selector: 'app-long-content',
  imports: [
    TuiAvatar,
    TuiBadge,
    TuiBadgeNotification,
    TuiCell,
    TuiFade,
    TuiIcon,
    TuiTitle,
  ],
  templateUrl: './long-content.component.html',
  styleUrl: './long-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LongContentComponent {}
