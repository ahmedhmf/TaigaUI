import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiSliderComponent } from '@taiga-ui/kit/components';

@Component({
  selector: 'app-slider-colors',
  imports: [TuiSliderComponent],
  templateUrl: './slider-colors.component.html',
  styleUrl: './slider-colors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderColorsComponent {}
