import { RadioIdentityMatcherComponent } from '../components/ui/radio/radio-identity-matcher/radio-identity-matcher.component';
import { RadioListComponent } from '../components/ui/radio/radio-list/radio-list.component';
import { RadioPlatformsComponent } from '../components/ui/radio/radio-platforms/radio-platforms.component';
import { ComponentStructure } from './app.config';

export const radioComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Radio Platforms',
    title: 'Radio Platforms',
    description: 'Radio Platforms',
    url: 'https://taiga-ui.dev/components/radio#platforms',
    component: RadioPlatformsComponent,
  },
  {
    label: 'Radio Identity matcher',
    title: 'Radio Identity matcher',
    description: 'Radio Identity matcher',
    url: 'https://taiga-ui.dev/components/radio#identity-matcher',
    component: RadioIdentityMatcherComponent,
  },
  {
    label: 'Radio List',
    title: 'Radio List',
    description: 'Radio List',
    url: 'https://taiga-ui.dev/components/radio#list',
    component: RadioListComponent,
  },
];
