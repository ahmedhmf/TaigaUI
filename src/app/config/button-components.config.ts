import { ComponentStructure } from './app.config';
import { ButtonCloseComponent } from '../components/ui/button/button-close/button-close.component';
import { ButtonDiComponent } from '../components/ui/button/button-di/button-di.component';
import { ButtonGroupComponent } from '../components/ui/button/button-group/button-group.component';
import { ButtonLoadingComponent } from '../components/ui/button/button-loading/button-loading.component';
import { ButtonVerticalComponent } from '../components/ui/button/button-vertical/button-vertical.component';
import { ButtonComponent } from '../components/ui/button/button.component';

export const buttonComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Buttons',
    title: 'Button',
    description: 'Button Control',
    url: 'https://taiga-ui.dev/components/button',
    component: ButtonComponent,
  },
  {
    label: 'Buttons Close',
    title: 'Button Close',
    description: 'Close Button Control',
    url: 'https://taiga-ui.dev/components/button-close',
    component: ButtonCloseComponent,
  },
  {
    label: 'Button Group',
    title: 'Button Group',
    description: 'Grouping Buttons in one control',
    url: 'https://taiga-ui.dev/components/button-group',
    component: ButtonGroupComponent,
  },
  {
    label: 'Button Loading',
    title: 'Button Loading',
    description: 'Button with a loading wheel',
    url: 'https://taiga-ui.dev/components/button#loading',
    component: ButtonLoadingComponent,
  },
  {
    label: 'Button With DI',
    title: 'Button With DI',
    description: 'Button that user can configure using Dependency Injection',
    url: 'https://taiga-ui.dev/components/button#options-with--di',
    component: ButtonDiComponent,
  },
  {
    label: 'Button Vertical',
    title: 'Button Vertical',
    description: 'Button with Icon in a vertical design',
    url: 'https://taiga-ui.dev/components/button#vertical',
    component: ButtonVerticalComponent,
  },
];
