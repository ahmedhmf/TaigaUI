import { SelectCustomContentComponent } from '../components/ui/select/select-custom-content/select-custom-content.component';
import { SelectDataListComponent } from '../components/ui/select/select-data-list/select-data-list.component';
import { SelectDropdownMobileComponent } from '../components/ui/select/select-dropdown-mobile/select-dropdown-mobile.component';
import { SelectFormControlComponent } from '../components/ui/select/select-form-control/select-form-control.component';
import { SelectItemdHandlerComponent } from '../components/ui/select/select-itemd-handler/select-itemd-handler.component';
import { SelectNativePickerGroupingOptionsComponent } from '../components/ui/select/select-native-picker-grouping-options/select-native-picker-grouping-options.component';
import { SelectNativePickerComponent } from '../components/ui/select/select-native-picker/select-native-picker.component';
import { SelectOverrideOptionComponent } from '../components/ui/select/select-override-option/select-override-option.component';
import { SelectTextfieldCustomComponent } from '../components/ui/select/select-textfield-custom/select-textfield-custom.component';
import { SelectVirtualScrollComponent } from '../components/ui/select/select-virtual-scroll/select-virtual-scroll.component';
import { ComponentStructure } from './app.config';

export const selectComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Select Textfield Custom',
    title: 'Select Textfield Custom',
    description: 'Select Textfield Custom',
    url: 'https://taiga-ui.dev/components/select#textfield-customization',
    component: SelectTextfieldCustomComponent,
  },
  {
    label: 'Select Items Handlers',
    title: 'Select Items Handlers',
    description: 'Select Items Handlers',
    url: 'https://taiga-ui.dev/components/select#items-handlers',
    component: SelectItemdHandlerComponent,
  },
  {
    label: 'Select Custom Content',
    title: 'Select Custom Content',
    description: 'Select Custom Content',
    url: 'https://taiga-ui.dev/components/select#content-customization',
    component: SelectCustomContentComponent,
  },
  {
    label: 'Select Data List',
    title: 'Select Data List',
    description: 'Select Data List',
    url: 'https://taiga-ui.dev/components/select#data-list',
    component: SelectDataListComponent,
  },
  {
    label: 'Select Form Control Output',
    title: 'Select Form Control Output',
    description: 'Select Form Control Output',
    url: 'https://taiga-ui.dev/components/select#form-control-output',
    component: SelectFormControlComponent,
  },
  {
    label: 'Select Virtual Scroll',
    title: 'Select Virtual Scroll',
    description: 'Select Virtual Scroll',
    url: 'https://taiga-ui.dev/components/select#virtual-scroll',
    component: SelectVirtualScrollComponent,
  },
  {
    label: 'Select With Dropdown Mobile',
    title: 'Select With Dropdown Mobile',
    description: 'Select With Dropdown Mobile',
    url: 'https://taiga-ui.dev/components/select#dropdown-mobile',
    component: SelectDropdownMobileComponent,
  },
  {
    label: 'Select With Form Control',
    title: 'Select With Form Control',
    description: 'Select With Form Control',
    url: 'https://taiga-ui.dev/components/select#form-control',
    component: SelectFormControlComponent,
  },
  {
    label: 'Select Native Picker Disabled Option',
    title: 'Select Native Picker Disabled Option',
    description: 'Select Native Picker Disabled Option',
    url: 'https://taiga-ui.dev/components/select#native-picker-disabled-option',
    component: SelectNativePickerComponent,
  },
  {
    label: 'Select Native Picker Grouping Options',
    title: 'Select Native Picker Grouping Options',
    description: 'Select Native Picker Grouping Options',
    url: 'https://taiga-ui.dev/components/select#native-picker-groups',
    component: SelectNativePickerGroupingOptionsComponent,
  },
  {
    label: 'Select Override Option Component',
    title: 'Select Override Option Component',
    description: 'Select Override Option Component',
    url: 'https://taiga-ui.dev/components/select#override-option-component',
    component: SelectOverrideOptionComponent,
  },
];
