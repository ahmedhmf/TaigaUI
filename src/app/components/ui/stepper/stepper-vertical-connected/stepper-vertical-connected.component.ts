import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiStepper } from '@taiga-ui/kit';

@Component({
  selector: 'app-stepper-vertical-connected',
  imports: [TuiStepper],
  templateUrl: './stepper-vertical-connected.component.html',
  styleUrl: './stepper-vertical-connected.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperVerticalConnectedComponent {
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
