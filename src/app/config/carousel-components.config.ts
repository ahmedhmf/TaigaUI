import { CarouselCustomComponent } from '../components/ui/carousel/carousel-custom/carousel-custom.component';
import { CarouselInsideDialogComponent } from '../components/ui/carousel/carousel-inside-dialog/carousel-inside-dialog.component';
import { CarouselMultipleComponent } from '../components/ui/carousel/carousel-multiple/carousel-multiple.component';
import { CarouselSingleComponent } from '../components/ui/carousel/carousel-single/carousel-single.component';
import { CarouselVerticalAlignmentComponent } from '../components/ui/carousel/carousel-vertical-alignment/carousel-vertical-alignment.component';
import { ComponentStructure } from './app.config';

export const carouselComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Carousel Single',
    title: 'Carousel Single',
    description: 'Carousel',
    url: 'https://taiga-ui.dev/components/carousel#single',
    component: CarouselSingleComponent,
  },
  {
    label: 'Carousel Multiple',
    title: 'Carousel Multiple',
    description: 'Carousel',
    url: 'https://taiga-ui.dev/components/carousel#multiple',
    component: CarouselMultipleComponent,
  },
  {
    label: 'Carousel Custom',
    title: 'Carousel Custom',
    description: 'Carousel',
    url: 'https://taiga-ui.dev/components/carousel#custom',
    component: CarouselCustomComponent,
  },
  {
    label: 'Carousel Inside Dialog',
    title: 'Carousel Inside Dialog',
    description: 'Carousel',
    url: 'https://taiga-ui.dev/components/carousel#carousel-inside-dialog',
    component: CarouselInsideDialogComponent,
  },
  {
    label: 'Carousel Vertical Alignment',
    title: 'Carousel Vertical Alignment',
    description: 'Carousel',
    url: 'https://taiga-ui.dev/components/carousel#vertical-alignment',
    component: CarouselVerticalAlignmentComponent,
  },
];
