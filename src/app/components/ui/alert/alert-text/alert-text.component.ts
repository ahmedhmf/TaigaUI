import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiButton, TuiAlertService } from '@taiga-ui/core';

@Component({
  selector: 'app-alert-text',
  imports: [TuiButton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './alert-text.component.html',
  styleUrl: './alert-text.component.scss',
})
export class AlertTextComponent {
  private readonly alerts = inject(TuiAlertService);

  protected showNotification(): void {
    this.alerts
      .open('Basic <strong>HTML</strong>', { label: 'With a heading!' })
      .subscribe();
  }
}
