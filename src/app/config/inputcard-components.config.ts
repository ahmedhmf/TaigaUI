import { InputcardCardComponent } from '../components/ui/inputcard/inputcard-card/inputcard-card.component';
import { InputcardFormComponent } from '../components/ui/inputcard/inputcard-form/inputcard-form.component';
import { ComponentStructure } from './app.config';

export const inputcardComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'InputCard Form',
    title: 'InputCard Form',
    description: 'InputCard Form',
    url: 'https://taiga-ui.dev/components/input-card#form',
    component: InputcardFormComponent,
  },
  {
    label: 'Inputcard Card',
    title: 'Inputcard Card',
    description: 'Inputcard Card',
    url: 'https://taiga-ui.dev/components/input-card#card',
    component: InputcardCardComponent,
  },
];
