import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiSliderComponent } from '@taiga-ui/kit';

@Component({
  selector: 'app-slider-segments',
  imports: [ReactiveFormsModule, TuiSliderComponent],
  templateUrl: './slider-segments.component.html',
  styleUrl: './slider-segments.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderSegmentsComponent {
  protected readonly labels: number[] = [0, 250, 500, 750, 1000];
  protected readonly formControl = new FormControl(250);

  protected patchValue(newValue: number): void {
    this.formControl.patchValue(newValue);
  }
}
