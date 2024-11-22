import { NotificationBasicComponent } from '../components/ui/notification/notification-basic/notification-basic.component';
import { NotificationInteractiveComponent } from '../components/ui/notification/notification-interactive/notification-interactive.component';
import { NotificationOptionsComponent } from '../components/ui/notification/notification-options/notification-options.component';
import { ComponentStructure } from './app.config';

export const notificationComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Notification',
    title: 'Notification',
    description: 'Notification Basic',
    url: 'https://taiga-ui.dev/components/notification#basic',
    component: NotificationBasicComponent,
  },
  {
    label: 'Notification',
    title: 'Notification Options',
    description: 'User can use token provider to set options',
    url: 'https://taiga-ui.dev/components/notification#options',
    component: NotificationOptionsComponent,
  },
  {
    label: 'Notification',
    title: 'Notification Interactive',
    description: 'User can interact with notification',
    url: 'https://taiga-ui.dev/components/notification#interactive',
    component: NotificationInteractiveComponent,
  },
];
