import { HintAutoComponent } from '../components/ui/hint/hint-auto/hint-auto.component';
import { HintCustomComponent } from '../components/ui/hint/hint-custom/hint-custom.component';
import { HintNestedComponent } from '../components/ui/hint/hint-nested/hint-nested.component';
import { HintComponent } from '../components/ui/hint/hint.component';
import { ComponentStructure } from './app.config';

export const hintComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Hint Basic',
    title: 'Hint Basic',
    description: 'Hint Basic',
    url: 'https://taiga-ui.dev/directives/hint#basic',
    component: HintComponent,
  },
  {
    label: 'Hint Custom',
    title: 'Hint Custom',
    description: 'Hint Custom',
    url: 'https://taiga-ui.dev/directives/hint#customizing',
    component: HintCustomComponent,
  },
  {
    label: 'Hint Nested',
    title: 'Hint Nested',
    description: 'Hint Nested',
    url: 'https://taiga-ui.dev/directives/hint#nested',
    component: HintNestedComponent,
  },
  {
    label: 'Hint Auto',
    title: 'Hint Auto',
    description: 'Hint Auto',
    url: 'https://taiga-ui.dev/directives/hint#auto',
    component: HintAutoComponent,
  },
];
