import { ActionbarMComponent } from '../components/ui/actionbar/actionbar-m/actionbar-m.component';
import { ActionbarSComponent } from '../components/ui/actionbar/actionbar-s/actionbar-s.component';
import { ActionbarTopPositionComponent } from '../components/ui/actionbar/actionbar-top-position/actionbar-top-position.component';
import { ComponentStructure } from './app.config';

export const actionbarComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'ActionBar M',
    title: 'ActionBar M',
    description: 'ActionBar sizeM',
    url: 'https://taiga-ui.dev/components/actions-bar#size--m',
    component: ActionbarMComponent,
  },
  {
    label: 'ActionBar S',
    title: 'ActionBar S',
    description: 'ActionBar size S',
    url: 'https://taiga-ui.dev/components/actions-bar#size--s',
    component: ActionbarSComponent,
  },
  {
    label: 'ActionBar Top',
    title: 'ActionBar Top',
    description: 'ActionBar Top position',
    url: 'https://taiga-ui.dev/components/actions-bar#top-position',
    component: ActionbarTopPositionComponent,
  },
];
