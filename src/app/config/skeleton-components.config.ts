import { SkeletonComponentsComponent } from '../components/ui/skeleton/skeleton-components/skeleton-components.component';
import { SkeletonTextComponent } from '../components/ui/skeleton/skeleton-text/skeleton-text.component';
import { ComponentStructure } from './app.config';

export const skeletonComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Skeleton Components',
    title: 'Skeleton Components',
    description: 'Skeleton Components',
    url: 'https://taiga-ui.dev/directives/skeleton#components',
    component: SkeletonComponentsComponent,
  },
  {
    label: 'Skeleton Text',
    title: 'Skeleton Text',
    description: 'Use boolean to toggle skeleton for elements',
    url: 'https://taiga-ui.dev/directives/skeleton#text',
    component: SkeletonTextComponent,
  },
];
