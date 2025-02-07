import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiSliderComponent } from '@taiga-ui/kit';

@Component({
  selector: 'app-slider-disabled',
  imports: [TuiSliderComponent],
  templateUrl: './slider-disabled.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderDisabledComponent {}
