import { BasicComponent } from '../components/ui/accordion/basic/basic.component';
import { ConnectedComponent } from '../components/ui/accordion/connected/connected.component';
import { CustomComponent } from '../components/ui/accordion/custom/custom.component';
import { EagerLazyComponent } from '../components/ui/accordion/eager-lazy/eager-lazy.component';
import { NestedComponent } from '../components/ui/accordion/nested/nested.component';
import { SingleComponent } from '../components/ui/accordion/single/single.component';
import { ComponentStructure } from './app.config';

export const accordionComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Accordion Basic',
    title: 'Accordion Basic',
    description: 'Accordion Basic',
    url: 'https://taiga-ui.dev/components/accordion#basic',
    component: BasicComponent,
  },
  {
    label: 'Accordion Custom',
    title: 'Accordion Custom',
    description: 'Accordion Custom',
    url: 'https://taiga-ui.dev/components/accordion#custom',
    component: CustomComponent,
  },
  {
    label: 'Accordion Single',
    title: 'Accordion Single',
    description: 'Accordion Single',
    url: 'https://taiga-ui.dev/components/accordion#single',
    component: SingleComponent,
  },
  {
    label: 'Accordion Eager and Lazy',
    title: 'Accordion Eager and Lazy',
    description: 'Accordion Eager and Lazy',
    url: 'https://taiga-ui.dev/components/accordion#eager-and--lazy',
    component: EagerLazyComponent,
  },
  {
    label: 'Accordion Nested',
    title: 'Accordion Nested',
    description: 'Accordion Nested',
    url: 'https://taiga-ui.dev/components/accordion#nested',
    component: NestedComponent,
  },
  {
    label: 'Accordion Connected',
    title: 'Accordion Connected',
    description: 'Accordion Connected',
    url: 'https://taiga-ui.dev/components/accordion#connected',
    component: ConnectedComponent,
  },
];
