import { AlertTextComponent } from '../components/ui/alert/alert-text/alert-text.component';
import { TextfiedlSizeComponent } from '../components/ui/textfield/textfiedl-size/textfiedl-size.component';
import { TextfieldDropDownComponent } from '../components/ui/textfield/textfield-drop-down/textfield-drop-down.component';
import { TextfieldFieldsetComponent } from '../components/ui/textfield/textfield-fieldset/textfield-fieldset.component';
import { TextfieldInteractiveIconComponent } from '../components/ui/textfield/textfield-interactive-icon/textfield-interactive-icon.component';
import { TextfieldMaskComponent } from '../components/ui/textfield/textfield-mask/textfield-mask.component';
import { TextfieldStatesComponent } from '../components/ui/textfield/textfield-states/textfield-states.component';
import { ComponentStructure } from './app.config';

export const textfieldComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Textfield Size',
    title: 'Textfield Size',
    description: 'Textfield Size',
    url: 'https://taiga-ui.dev/components/textfield#size',
    component: TextfiedlSizeComponent,
  },
  {
    label: 'Textfield States',
    title: 'Textfield States',
    description: 'Textfield States',
    url: 'https://taiga-ui.dev/components/textfield#states',
    component: TextfieldStatesComponent,
  },
  {
    label: 'Textfield Dropdown',
    title: 'Textfield Dropdown',
    description: 'Textfield Dropdown',
    url: 'https://taiga-ui.dev/components/textfield#dropdown',
    component: TextfieldDropDownComponent,
  },
  {
    label: 'Textfield Interactive Icons',
    title: 'Textfield Interactive Icons',
    description: 'Textfield Interactive Icons',
    url: 'https://taiga-ui.dev/components/textfield#interactive-icons',
    component: TextfieldInteractiveIconComponent,
  },
  {
    label: 'Textfield Mask',
    title: 'Textfield Mask',
    description: 'Textfield Mask',
    url: 'https://taiga-ui.dev/components/textfield#mask',
    component: TextfieldMaskComponent,
  },
  {
    label: 'Textfield Fieldset',
    title: 'Textfield Fieldset',
    description: 'Textfield Fieldset',
    url: 'https://taiga-ui.dev/components/textfield#fieldset',
    component: TextfieldFieldsetComponent,
  },
];
