import { SwipeActionsAutocloseComponent } from '../components/ui/swipe-actions/swipe-actions-autoclose/swipe-actions-autoclose.component';
import { SwipeActionsBasicComponent } from '../components/ui/swipe-actions/swipe-actions-basic/swipe-actions-basic.component';
import { SwipeActionsCustomComponent } from '../components/ui/swipe-actions/swipe-actions-custom/swipe-actions-custom.component';
import { ComponentStructure } from './app.config';

export const swipeActionsComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Swipe Actions Basic',
    title: 'Swipe Actions Basic',
    description: 'Swipe Actions Basic (mobile only)',
    url: 'https://taiga-ui.dev/components/swipe-actions#base',
    component: SwipeActionsBasicComponent,
  },
  {
    label: 'Swipe Actions Custom',
    title: 'Swipe Actions Custom',
    description: 'Swipe Actions Custom (mobile only)',
    url: 'https://taiga-ui.dev/components/swipe-actions#custom',
    component: SwipeActionsCustomComponent,
  },
  {
    label: 'Swipe Actions Autoclose',
    title: 'Swipe Actions Autoclose',
    description: 'Swipe Actions Autoclose (mobile only)',
    url: 'https://taiga-ui.dev/components/swipe-actions#auto-close',
    component: SwipeActionsAutocloseComponent,
  },
  {
    label: 'Swipe Actions Dynamic',
    title: 'Swipe Actions Dynamic',
    description: 'Swipe Actions Dynamic (mobile only)',
    url: 'https://taiga-ui.dev/components/swipe-actions#dynamic',
    component: SwipeActionsAutocloseComponent,
  },
  {
    label: 'Swipe Actions Desktop Fallback',
    title: 'Swipe Actions Desktop Fallback',
    description: 'Swipe Actions Desktop Fallback (mobile only)',
    url: 'https://taiga-ui.dev/components/swipe-actions#fallback',
    component: SwipeActionsAutocloseComponent,
  },
];
