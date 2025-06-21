import { DialogCustomComponent } from '../components/ui/dialog/dialog-custom/dialog-custom.component';
import { DialogWithDirectiveComponent } from '../components/ui/dialog/dialog-with-directive/dialog-with-directive.component';
import { ComponentStructure } from './app.config';

export const dialogComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Dialog Custom',
    title: 'Dialog Custom',
    description: 'Dialog Custom',
    url: 'https://taiga-ui.dev/dialog/custom#custom-dialog',
    component: DialogCustomComponent,
  },
  {
    label: 'Dialog Directive',
    title: 'Dialog Directive',
    description: 'Custom Dialog with directive',
    url: 'https://taiga-ui.dev/dialog/custom#custom-dialog-directive',
    component: DialogWithDirectiveComponent,
  },
];
