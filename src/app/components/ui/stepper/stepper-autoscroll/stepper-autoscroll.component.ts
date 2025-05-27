import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiStepper } from '@taiga-ui/kit';

@Component({
  selector: 'app-stepper-autoscroll',
  imports: [TuiStepper],
  templateUrl: './stepper-autoscroll.component.html',
  styleUrl: './stepper-autoscroll.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperAutoscrollComponent {
  protected readonly steps = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
  ];
}
