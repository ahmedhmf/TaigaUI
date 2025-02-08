import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  TuiAlertService,
  TuiIcon,
  TuiNumberFormat,
  TuiTextfield,
} from '@taiga-ui/core';
import { TuiInputNumber, TuiTabs } from '@taiga-ui/kit';

@Component({
  selector: 'app-tabs-stepper',
  imports: [
    FormsModule,
    TuiIcon,
    TuiInputNumber,
    TuiNumberFormat,
    TuiTabs,
    TuiTextfield,
  ],
  templateUrl: './tabs-stepper.component.html',
  styleUrl: './tabs-stepper.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsStepperComponent {
  private readonly alerts = inject(TuiAlertService);

  protected activeItemIndex = 0;

  protected readonly steps = ['Sales', 'Settings', 'News'];

  protected onClick(item: string): void {
    this.alerts.open(item).subscribe();
  }
}
