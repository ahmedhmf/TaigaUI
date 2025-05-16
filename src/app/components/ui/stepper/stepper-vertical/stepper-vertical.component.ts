import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiStepper } from '@taiga-ui/kit';

@Component({
  selector: 'app-stepper-vertical',
  imports: [TuiStepper],
  templateUrl: './stepper-vertical.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperVerticalComponent {
  protected readonly steps = ['Start Up', 'Cash In', 'Sell Out'];
}
