import { SwitchSameColorComponent } from '../components/ui/switch/switch-same-color/switch-same-color.component';
import { SwitchComponent } from '../components/ui/switch/switch.component';
import { ComponentStructure } from './app.config';

export const switchComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Switch',
    title: 'Switch',
    description: 'Switch',
    url: 'https://taiga-ui.dev/components/switch#platforms',
    component: SwitchComponent,
  },
  {
    label: 'Switch color',
    title: 'Switch color',
    description: 'Switch same color',
    url: 'https://taiga-ui.dev/components/switch#same-color',
    component: SwitchSameColorComponent,
  },
];
