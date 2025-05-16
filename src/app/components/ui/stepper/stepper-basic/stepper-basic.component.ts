import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiStepper } from '@taiga-ui/kit';

@Component({
  selector: 'app-stepper-basic',
  imports: [TuiStepper],
  templateUrl: './stepper-basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperBasicComponent {}
