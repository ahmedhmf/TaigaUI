import { AlertComponentDataComponent } from '../components/ui/alert/alert-component-data/alert-component-data.component';
import { AlertComponentComponent } from '../components/ui/alert/alert-component/alert-component.component';
import { AlertConcurrencyComponent } from '../components/ui/alert/alert-concurrency/alert-concurrency.component';
import { AlertCustomLabelComponent } from '../components/ui/alert/alert-custom-label/alert-custom-label.component';
import { AlertDirectiveComponent } from '../components/ui/alert/alert-directive/alert-directive.component';
import { AlertTemplateComponent } from '../components/ui/alert/alert-template/alert-template.component';
import { AlertTextComponent } from '../components/ui/alert/alert-text/alert-text.component';
import { ComponentStructure } from './app.config';

export const alertComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Alert Text',
    title: 'Alert Text',
    description: 'Alert Text',
    url: 'https://taiga-ui.dev/components/alert#text',
    component: AlertTextComponent,
  },
  {
    label: 'Alert Template',
    title: 'Alert Template',
    description: 'Alert Template',
    url: 'https://taiga-ui.dev/components/alert#template',
    component: AlertTemplateComponent,
  },
  {
    label: 'Alert Component',
    title: 'Alert Component',
    description: 'Alert Component',
    url: 'https://taiga-ui.dev/components/alert#component',
    component: AlertComponentComponent,
  },
  {
    label: 'Alert Component with data',
    title: 'Alert Component with data',
    description: 'Alert Component with data',
    url: 'https://taiga-ui.dev/components/alert#component-with-data',
    component: AlertComponentDataComponent,
  },
  {
    label: 'Alert with custom label',
    title: 'Alert with custom label',
    description: 'Alert with custom label',
    url: 'https://taiga-ui.dev/components/alert#component-with-custom-label',
    component: AlertCustomLabelComponent,
  },
  {
    label: 'Alert directive',
    title: 'Alert directive',
    description: 'Alert directive',
    url: 'https://taiga-ui.dev/components/alert#directive',
    component: AlertDirectiveComponent,
  },
  {
    label: 'Alert Concurrency limit',
    title: 'Alert Concurrency limit',
    description: 'Alert Concurrency limit',
    url: 'https://taiga-ui.dev/components/alert#concurrency-limit',
    component: AlertConcurrencyComponent,
  },
];
