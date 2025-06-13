import { BasicComponent } from '../components/ui/input-date/basic/basic.component';
import { CustomDropdownComponent } from '../components/ui/input-date/custom-dropdown/custom-dropdown.component';
import { FormatComponent } from '../components/ui/input-date/format/format.component';
import { LimitsComponent } from '../components/ui/input-date/limits/limits.component';
import { MobileComponent } from '../components/ui/input-date/mobile/mobile.component';
import { ValidationComponent } from '../components/ui/input-date/validation/validation.component';
import { ValueTransformerComponent } from '../components/ui/input-date/value-transformer/value-transformer.component';
import { ComponentStructure } from './app.config';

export const inputDateComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Input Date',
    title: 'Input Date',
    description: 'Input Date',
    url: 'https://taiga-ui.dev/components/input-date#basic',
    component: BasicComponent,
  },
  {
    label: 'Input Date with Custom Dropdown',
    title: 'Input Date with Custom Dropdown',
    description: 'Input Date with Custom Dropdown',
    url: 'https://taiga-ui.dev/components/input-date#custom-dropdown',
    component: CustomDropdownComponent,
  },
  {
    label: 'Input Date Validation',
    title: 'Input Date Validation',
    description: 'Input Date Validation',
    url: 'https://taiga-ui.dev/components/input-date#validation',
    component: ValidationComponent,
  },
  {
    label: 'Input Date Value Transformer',
    title: 'Input Date Value Transformer',
    description: 'Input Date Value Transformer',
    url: 'https://taiga-ui.dev/components/input-date#value-transformer',
    component: ValueTransformerComponent,
  },
  {
    label: 'Input Date with Custom Dropdown and Validation',
    title: 'Input Date with Custom Dropdown and Validation',
    description: 'Input Date with Custom Dropdown and Validation',
    url: 'https://taiga-ui.dev/components/input-date#format',
    component: FormatComponent,
  },
  {
    label: 'Input Date Mobile',
    title: 'Input Date Mobile',
    description: 'Input Date Mobile',
    url: 'https://taiga-ui.dev/components/input-date#mobile',
    component: MobileComponent,
  },
  {
    label: 'Input Date Limits',
    title: 'Input Date Limits',
    description: 'Input Date Limits',
    url: 'https://taiga-ui.dev/components/input-date#limits',
    component: LimitsComponent,
  },
  {
    label: 'Input Date Datalist',
    title: 'Input Date Datalist',
    description: 'Input Date Datalist',
    url: 'https://taiga-ui.dev/components/input-date#datalist',
    component: ValidationComponent,
  },
];
