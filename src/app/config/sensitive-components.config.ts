import { SensitiveBasicComponent } from '../components/ui/sensitive/sensitive-basic/sensitive-basic.component';
import { SensitiveComponentsComponent } from '../components/ui/sensitive/sensitive-components/sensitive-components.component';
import { ComponentStructure } from './app.config';

export const sensitiveComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Sensitive Basic',
    title: 'Sensitive Basic',
    description: 'Hide sensitive data',
    url: 'https://taiga-ui.dev/directives/sensitive#base',
    component: SensitiveBasicComponent,
  },
  {
    label: 'Sensitive Components',
    title: 'Sensitive Components',
    description: 'Hide sensitive data in components',
    url: 'https://taiga-ui.dev/directives/sensitive#components',
    component: SensitiveComponentsComponent,
  },
];
