import { BreadcrumbsBasicComponent } from '../components/ui/breadcrumbs/breadcrumbs-basic/breadcrumbs-basic.component';
import { BreadcrumbsOverflowComponent } from '../components/ui/breadcrumbs/breadcrumbs-overflow/breadcrumbs-overflow.component';
import { ComponentStructure } from './app.config';

export const breadcrumbComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Breadcrumbs Basic',
    title: 'Breadcrumbs Basic',
    description: 'Breadcrumbs Basic',
    url: 'https://taiga-ui.dev/navigation/breadcrumbs#basic',
    component: BreadcrumbsBasicComponent,
  },
  {
    label: 'Breadcrumbs Overflow',
    title: 'Breadcrumbs Overflow',
    description: 'Breadcrumbs Overflow',
    url: 'https://taiga-ui.dev/navigation/breadcrumbs#overflow',
    component: BreadcrumbsOverflowComponent,
  },
];
