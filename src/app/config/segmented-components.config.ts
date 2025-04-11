import { SegmentedContentComponent } from '../components/ui/segmented/segmented-content/segmented-content.component';
import { SegmentedCustomizationComponent } from '../components/ui/segmented/segmented-customization/segmented-customization.component';
import { SegmentedSizesComponent } from '../components/ui/segmented/segmented-sizes/segmented-sizes.component';
import { SegmentedWidthComponent } from '../components/ui/segmented/segmented-width/segmented-width.component';
import { ComponentStructure } from './app.config';

export const segmentedComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Segmented Sizes',
    title: 'Segmented Sizes',
    description: 'User can set sizes',
    url: 'https://taiga-ui.dev/navigation/segmented#sizes',
    component: SegmentedSizesComponent,
  },
  {
    label: 'Segmented Width',
    title: 'Segmented Width',
    description: 'User can set width',
    url: 'https://taiga-ui.dev/navigation/segmented#width',
    component: SegmentedWidthComponent,
  },
  {
    label: 'Segmented customization',
    title: 'Segmented customization',
    description: 'User can set customization',
    url: 'https://taiga-ui.dev/navigation/segmented#customization',
    component: SegmentedCustomizationComponent,
  },
  {
    label: 'Segmented Content',
    title: 'Segmented Content',
    description: 'User can project content',
    url: 'https://taiga-ui.dev/navigation/segmented#content',
    component: SegmentedContentComponent,
  },
];
