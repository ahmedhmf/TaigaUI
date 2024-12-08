import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiNotification, TuiAlertService } from '@taiga-ui/core';

@Component({
  selector: 'app-notification-interactive',
  imports: [TuiNotification],
  templateUrl: './notification-interactive.component.html',
  styleUrl: './notification-interactive.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationInteractiveComponent {
  private readonly alertService = inject(TuiAlertService);

  showNotification(): void {
    this.alertService
      .open('This is an interactive notification!', {
        label: 'Notification Title',
      })
      .subscribe();
  }
}
