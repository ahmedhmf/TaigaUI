import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton, TuiNotification } from '@taiga-ui/core';

@Component({
  selector: 'app-notification-basic',
  standalone: true,
  imports: [TuiNotification, TuiButton],
  templateUrl: './notification-basic.component.html',
  styleUrl: './notification-basic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationBasicComponent {}
