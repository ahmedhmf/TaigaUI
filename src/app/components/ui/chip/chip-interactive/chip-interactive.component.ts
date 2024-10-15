import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiRepeatTimes } from '@taiga-ui/cdk';
import { TuiAlertService, TuiButton } from '@taiga-ui/core';
import { TuiCheckbox, TuiChip } from '@taiga-ui/kit';

@Component({
  selector: 'app-chip-interactive',
  standalone: true,
  imports: [FormsModule, TuiButton, TuiCheckbox, TuiChip, TuiRepeatTimes],
  templateUrl: './chip-interactive.component.html',
  styleUrl: './chip-interactive.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipInteractiveComponent {
  private readonly alerts = inject(TuiAlertService);

  protected readonly values = ['test', 'Some text', 'WOW!'];

  protected onChip(index: number): void {
    this.alerts.open(`Clicked chip ${index + 1}`).subscribe();
  }

  protected onX(index: number): void {
    this.alerts
      .open(`Removed chip ${index + 1}`, { appearance: 'error' })
      .subscribe();
  }
}
