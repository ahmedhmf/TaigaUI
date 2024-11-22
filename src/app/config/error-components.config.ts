import { ErrorComponent } from '../components/ui/error/error.component';
import { ComponentStructure } from './app.config';

export const errorComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Error',
    title: 'Error',
    description:
      'Error show messages styled as errors with height andfade transition',
    url: 'https://taiga-ui.dev/components/error#base',
    component: ErrorComponent,
  },
];
