import { ActionbarMComponent } from '../components/ui/actionbar/actionbar-m/actionbar-m.component';
import { SizesComponent } from '../components/ui/arc-chart/sizes/sizes.component';
import { StackedComponent } from '../components/ui/arc-chart/stacked/stacked.component';
import { ComponentStructure } from './app.config';

export const arcChartComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'ArcChart Sizes',
    title: 'ArcChart Sizes',
    description: 'ArcChart Sizes',
    url: 'https://taiga-ui.dev/charts/arc-chart#sizes',
    component: SizesComponent,
  },
  {
    label: 'ArcChart Stacked',
    title: 'ArcChart Stacked',
    description: 'ArcChart Stacked',
    url: 'https://taiga-ui.dev/charts/arc-chart#stacked',
    component: StackedComponent,
  },
];
