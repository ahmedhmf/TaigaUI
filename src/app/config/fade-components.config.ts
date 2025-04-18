import { FadeBasicComponent } from '../components/ui/fade/fade-basic/fade-basic.component';
import { FadeMultilineComponent } from '../components/ui/fade/fade-multiline/fade-multiline.component';
import { FadeVerticalComponent } from '../components/ui/fade/fade-vertical/fade-vertical.component';
import { ComponentStructure } from './app.config';

export const fadeComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Fade Basic',
    title: 'Fade Basic',
    description: 'Fade out overflown content',
    url: 'https://taiga-ui.dev/directives/fade#basic',
    component: FadeBasicComponent,
  },
  {
    label: 'Fade Multiline',
    title: 'Fade Multiline',
    description: 'Fade Multiline',
    url: 'https://taiga-ui.dev/directives/fade#multiline',
    component: FadeMultilineComponent,
  },
  {
    label: 'Fade Vertical',
    title: 'Fade Vertical',
    description: 'Fade Vertical',
    url: 'https://taiga-ui.dev/directives/fade#vertical',
    component: FadeVerticalComponent,
  },
];
