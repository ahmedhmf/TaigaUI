import { GroupButtonComponent } from '../components/ui/group-button/group-button.component';
import { GroupDirectiveComponent } from '../components/ui/group-directive/group-directive.component';
import { GroupInputsComponent } from '../components/ui/group-inputs/group-inputs.component';
import { GroupVerticalComponent } from '../components/ui/group-vertical/group-vertical.component';
import { ComponentStructure } from './app.config';

export const groupComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Group Inputs',
    title: 'Group Inputs',
    description: 'Group Inputs',
    url: 'https://taiga-ui.dev/components/group#inputs',
    component: GroupInputsComponent,
  },
  {
    label: 'Group Buttons',
    title: 'Group Buttons',
    description: 'Group Buttons',
    url: 'https://taiga-ui.dev/components/group#buttons',
    component: GroupButtonComponent,
  },
  {
    label: 'Group Vertical',
    title: 'Group Vertical',
    description: 'Group Vertical',
    url: 'https://taiga-ui.dev/components/group#vertical',
    component: GroupVerticalComponent,
  },
  {
    label: 'Group Directive',
    title: 'Group Directive',
    description: 'Group Directive',
    url: 'https://taiga-ui.dev/components/group#vertical',
    component: GroupDirectiveComponent,
  },
];
