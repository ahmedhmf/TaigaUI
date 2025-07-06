import { RippleBasicComponent } from '../components/ui/ripple/ripple-basic/ripple-basic.component';
import { RippleGlobalComponent } from '../components/ui/ripple/ripple-global/ripple-global.component';
import { ComponentStructure } from './app.config';

export const rippleComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Ripple Basic',
    title: 'Ripple Basic',
    description: 'Ripple effect on mobile',
    url: 'https://taiga-ui.dev/directives/ripple#basic',
    component: RippleBasicComponent,
  },
  {
    label: 'Ripple Global',
    title: 'Ripple Global',
    description: 'Ripple Global',
    url: 'https://taiga-ui.dev/directives/ripple#global-ripple',
    component: RippleGlobalComponent,
  },
];
