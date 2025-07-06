import { SizesComponent } from '../components/ui/ring-chart/sizes/sizes.component';
import { WithLabelsComponent } from '../components/ui/ring-chart/with-labels/with-labels.component';
import { ComponentStructure } from './app.config';

export const ringChartComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'RingChart Sizes',
    title: 'RingChart Sizes',
    description: 'RingChart Sizes',
    url: 'https://taiga-ui.dev/charts/ring-chart#sizes',
    component: SizesComponent,
  },
  {
    label: 'RingChart Labels',
    title: 'RingChart Labels',
    description: 'RingChart Labels',
    url: 'https://taiga-ui.dev/charts/ring-chart#labels',
    component: WithLabelsComponent,
  },
];
