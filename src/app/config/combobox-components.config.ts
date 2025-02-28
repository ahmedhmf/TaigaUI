import { ComboboxAsyncComponent } from '../components/ui/combobox/combobox-async/combobox-async.component';
import { ComboboxDataListWrapperComponent } from '../components/ui/combobox/combobox-data-list-wrapper/combobox-data-list-wrapper.component';
import { ComboboxDataListComponent } from '../components/ui/combobox/combobox-data-list/combobox-data-list.component';
import { ComboboxIdOnlyComponent } from '../components/ui/combobox/combobox-id-only/combobox-id-only.component';
import { ComboboxOptionsDisabledComponent } from '../components/ui/combobox/combobox-options-disabled/combobox-options-disabled.component';
import { ComboboxOptionsStringifyComponent } from '../components/ui/combobox/combobox-options-stringify/combobox-options-stringify.component';
import { ComboboxStringifyComponent } from '../components/ui/combobox/combobox-stringify/combobox-stringify.component';
import { ComboboxVirtualScrollComponent } from '../components/ui/combobox/combobox-virtual-scroll/combobox-virtual-scroll.component';
import { ComponentStructure } from './app.config';

export const comboboxComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'ComboBox async',
    title: 'ComboBox async',
    description: 'ComboBox with async data loading',
    url: 'https://taiga-ui.dev/components/combo-box#async',
    component: ComboboxAsyncComponent,
  },
  {
    label: 'ComboBox datalist',
    title: 'ComboBox datalist',
    description: 'ComboBox datalist',
    url: 'https://taiga-ui.dev/components/combo-box#datalist',
    component: ComboboxDataListComponent,
  },
  {
    label: 'ComboBox ID only',
    title: 'ComboBox ID only',
    description: 'ComboBox ID only',
    url: 'https://taiga-ui.dev/components/combo-box#id',
    component: ComboboxIdOnlyComponent,
  },
  {
    label: 'ComboBox DataList Wrapper',
    title: 'ComboBox DataList Wrapper',
    description: 'ComboBox DataList Wrapper',
    url: 'https://taiga-ui.dev/components/combo-box#wrapper',
    component: ComboboxDataListWrapperComponent,
  },
  {
    label: 'ComboBox stringify',
    title: 'ComboBox stringify',
    description: 'ComboBox stringify',
    url: 'https://taiga-ui.dev/components/combo-box#stringify',
    component: ComboboxStringifyComponent,
  },
  {
    label: 'ComboBox Virtual Scroll',
    title: 'ComboBox Virtual Scroll',
    description: 'ComboBox Virtual Scroll',
    url: 'https://taiga-ui.dev/components/combo-box#virtual',
    component: ComboboxVirtualScrollComponent,
  },
  {
    label: 'ComboBox Options (stringify)',
    title: 'ComboBox Options (stringify)',
    description: 'ComboBox Options (stringify)',
    url: 'https://taiga-ui.dev/components/combo-box#options-stringify',
    component: ComboboxOptionsStringifyComponent,
  },
  {
    label: 'ComboBox Options disabled',
    title: 'ComboBox Options disabled',
    description:
      'ComboBox do not allow disabled options to be selected by typing them',
    url: 'https://taiga-ui.dev/components/combo-box#ignore-disabled',
    component: ComboboxOptionsDisabledComponent,
  },
];
