import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  TuiNotification,
  tuiNotificationOptionsProvider,
} from '@taiga-ui/core';

@Component({
  selector: 'app-notification-options',
  imports: [TuiNotification],
  templateUrl: './notification-options.component.html',
  styleUrl: './notification-options.component.scss',
  providers: [
    tuiNotificationOptionsProvider({
      icon: '@tui.alarm-clock',
      appearance: 'info',
      size: 's',
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationOptionsComponent {}
