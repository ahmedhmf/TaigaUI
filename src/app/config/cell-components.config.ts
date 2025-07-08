import { ActionsComponent } from '../components/ui/cell/actions/actions.component';
import { BasicComponent } from '../components/ui/cell/basic/basic.component';
import { CombinationComponent } from '../components/ui/cell/combination/combination.component';
import { ConnectedComponent } from '../components/ui/cell/connected/connected.component';
import { DisabledStateComponent } from '../components/ui/cell/disabled-state/disabled-state.component';
import { LabelComponent } from '../components/ui/cell/label/label.component';
import { LeftSideComponent } from '../components/ui/cell/left-side/left-side.component';
import { LongContentComponent } from '../components/ui/cell/long-content/long-content.component';
import { RightSideComponent } from '../components/ui/cell/right-side/right-side.component';
import { ComponentStructure } from './app.config';

export const cellComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Cell Basic',
    title: 'Cell Basic',
    description: 'Cell Basic',
    url: 'https://taiga-ui.dev/layout/cell#basic',
    component: BasicComponent,
  },
  {
    label: 'Cell Label',
    title: 'Cell Label',
    description: 'Cell Label',
    url: 'https://taiga-ui.dev/layout/cell#label',
    component: LabelComponent,
  },
  {
    label: 'Cell Left Side',
    title: 'Cell Left Side',
    description: 'Cell Left Side',
    url: 'https://taiga-ui.dev/layout/cell#left-side',
    component: LeftSideComponent,
  },
  {
    label: 'Cell Right Side',
    title: 'Cell Right Side',
    description: 'Cell Right Side',
    url: 'https://taiga-ui.dev/layout/cell#right-side',
    component: RightSideComponent,
  },
  {
    label: 'Cell Long Content',
    title: 'Cell Long Content',
    description: 'Cell Long Content',
    url: 'https://taiga-ui.dev/layout/cell#long-content',
    component: LongContentComponent,
  },
  {
    label: 'Cell Actions',
    title: 'Cell Actions',
    description: 'Cell Actions',
    url: 'https://taiga-ui.dev/layout/cell#actions',
    component: ActionsComponent,
  },
  {
    label: 'Cell Combinations',
    title: 'Cell Combinations',
    description: 'Cell Combinations',
    url: 'https://taiga-ui.dev/layout/cell#combinations',
    component: CombinationComponent,
  },
  {
    label: 'Cell Connected',
    title: 'Cell Connected',
    description: 'Cell Connected',
    url: 'https://taiga-ui.dev/layout/cell#connected',
    component: ConnectedComponent,
  },
  {
    label: 'Cell Disabled State',
    title: 'Cell Disabled State',
    description: 'Cell Disabled State',
    url: 'https://taiga-ui.dev/layout/cell#disabled-state',
    component: DisabledStateComponent,
  },
];
