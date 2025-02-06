import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiSliderComponent } from '@taiga-ui/kit';

@Component({
  selector: 'app-slider-sizes',
  imports: [FormsModule, ReactiveFormsModule, TuiSliderComponent],
  templateUrl: './slider-sizes.component.html',
  styleUrl: './slider-sizes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderSizesComponent {
  protected value = 4;
  protected formControl = new FormControl(60);
}
