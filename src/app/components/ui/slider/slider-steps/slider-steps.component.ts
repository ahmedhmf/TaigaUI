import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiKeySteps, TuiSlider } from '@taiga-ui/kit';

@Component({
  selector: 'app-slider-steps',
  imports: [DecimalPipe, ReactiveFormsModule, TuiSlider],
  templateUrl: './slider-steps.component.html',
  styleUrl: './slider-steps.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderStepsComponent {
  protected readonly labels: string[] = [
    '5 000',
    '100 000',
    '300 000',
    '1 000 000',
  ];
  protected readonly formControl = new FormControl(720_000);
  protected readonly segments = this.labels.length - 1;

  protected readonly keySteps: TuiKeySteps = [
    [0, 5_000],
    [100 / 3, 100_000],
    [(100 / 3) * 2, 300_000],
    [100, 1_000_000],
  ];
}
