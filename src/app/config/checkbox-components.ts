import { CheckboxDecorativeComponent } from '../components/ui/checkbox/checkbox-decorative/checkbox-decorative.component';
import { CheckboxFormComponent } from '../components/ui/checkbox/checkbox-form/checkbox-form.component';
import { CheckboxPlatformsComponent } from '../components/ui/checkbox/checkbox-platforms/checkbox-platforms.component';
import { ComponentStructure } from './app.config';

export const checkboxComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Checkbox Platforms',
    title: 'Checkbox Platforms',
    description: 'Checkbox Platforms',
    url: 'https://taiga-ui.dev/components/checkbox#platforms',
    component: CheckboxPlatformsComponent,
  },
  {
    label: 'Checkbox Decorative',
    title: 'Checkbox Decorative',
    description: 'Checkbox for decorative purposes',
    url: 'https://taiga-ui.dev/components/checkbox#decorative',
    component: CheckboxDecorativeComponent,
  },
  {
    label: 'Checkbox Form',
    title: 'Checkbox Form',
    description: 'Checkbox form',
    url: 'https://taiga-ui.dev/components/checkbox#form',
    component: CheckboxFormComponent,
  },
];
