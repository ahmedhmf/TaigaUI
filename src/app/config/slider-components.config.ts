import { SliderColorsComponent } from '../components/ui/slider/slider-colors/slider-colors.component';
import { SliderComplexComponent } from '../components/ui/slider/slider-complex/slider-complex.component';
import { SliderDisabledComponent } from '../components/ui/slider/slider-disabled/slider-disabled.component';
import { SliderSegmentsComponent } from '../components/ui/slider/slider-segments/slider-segments.component';
import { SliderSizesComponent } from '../components/ui/slider/slider-sizes/slider-sizes.component';
import { SliderStepsComponent } from '../components/ui/slider/slider-steps/slider-steps.component';
import { ComponentStructure } from './app.config';

export const sliderComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Slider',
    title: 'Slider',
    description: 'Slider sizes',
    url: 'https://taiga-ui.dev/components/slider#sizes',
    component: SliderSizesComponent,
  },
  {
    label: 'Slider Colors',
    title: 'Slider Colors',
    description: 'Slider colors',
    url: 'https://taiga-ui.dev/components/slider#colors',
    component: SliderColorsComponent,
  },
  {
    label: 'Slider Segments',
    title: 'Slider Segments',
    description: 'Slider with visual segments',
    url: 'https://taiga-ui.dev/components/slider#segments',
    component: SliderSegmentsComponent,
  },
  {
    label: 'Slider Disabled',
    title: 'Slider Disabled',
    description: 'Slider disabled',
    url: 'https://taiga-ui.dev/components/slider#disabled',
    component: SliderDisabledComponent,
  },
  {
    label: 'Slider Steps',
    title: 'Slider Steps',
    description: 'Slider with key steps',
    url: 'https://taiga-ui.dev/components/slider#key-steps',
    component: SliderStepsComponent,
  },
  {
    label: 'Slider Complex',
    title: 'Slider Complex',
    description: 'Slider complex',
    url: 'https://taiga-ui.dev/components/slider#complex',
    component: SliderComplexComponent,
  },
];
