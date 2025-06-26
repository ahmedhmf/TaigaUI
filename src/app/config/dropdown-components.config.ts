import { DropdownAppereanceComponent } from '../components/ui/dropdown/dropdown-appereance/dropdown-appereance.component';
import { DropdownBasicComponent } from '../components/ui/dropdown/dropdown-basic/dropdown-basic.component';
import { DropdownChangeDetectionComponent } from '../components/ui/dropdown/dropdown-change-detection/dropdown-change-detection.component';
import { DropdownInterestingComponent } from '../components/ui/dropdown/dropdown-interesting/dropdown-interesting.component';
import { DropdownManualComponent } from '../components/ui/dropdown/dropdown-manual/dropdown-manual.component';
import { DropdownMobileComponent } from '../components/ui/dropdown/dropdown-mobile/dropdown-mobile.component';
import { ComponentStructure } from './app.config';

export const dropdownComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Dropdown Basic',
    title: 'Dropdown Basic',
    description: 'Dropdown Basic',
    url: 'https://taiga-ui.dev/directives/dropdown#basic',
    component: DropdownBasicComponent,
  },
  {
    label: 'Dropdown Interesting',
    title: 'Dropdown Interesting',
    description: 'Dropdown Interesting',
    url: 'https://taiga-ui.dev/directives/dropdown#interesting',
    component: DropdownInterestingComponent,
  },
  {
    label: 'Dropdown Change Detection',
    title: 'Dropdown Change Detection',
    description: 'Dropdown Change Detection',
    url: 'https://taiga-ui.dev/directives/dropdown#change-detection',
    component: DropdownChangeDetectionComponent,
  },
  {
    label: 'Dropdown Appearance',
    title: 'Dropdown Appearance',
    description: 'Dropdown Appearance',
    url: 'https://taiga-ui.dev/directives/dropdown#appearance',
    component: DropdownAppereanceComponent,
  },
  {
    label: 'Dropdown Manual',
    title: 'Dropdown Manual',
    description: 'Dropdown Manual',
    url: 'https://taiga-ui.dev/directives/dropdown#manual',
    component: DropdownManualComponent,
  },
  {
    label: 'Dropdown Mobile',
    title: 'Dropdown Mobile',
    description: 'Dropdown Mobile',
    url: 'https://taiga-ui.dev/directives/dropdown#mobile',
    component: DropdownMobileComponent,
  },
];
