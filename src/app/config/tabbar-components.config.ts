import { TabbarButtonsComponent } from '../components/ui/tabbar/tabbar-buttons/tabbar-buttons.component';
import { TabbarCustomizationComponent } from '../components/ui/tabbar/tabbar-customization/tabbar-customization.component';
import { TabbarLinksComponent } from '../components/ui/tabbar/tabbar-links/tabbar-links.component';
import { TabbarSkeletonComponent } from '../components/ui/tabbar/tabbar-skeleton/tabbar-skeleton.component';
import { ComponentStructure } from './app.config';

export const tabbarComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Tabbar Buttons',
    title: 'Tabbar Buttons',
    description: 'Tabbar Buttons',
    url: 'https://taiga-ui.dev/navigation/tab-bar#buttons',
    component: TabbarButtonsComponent,
  },
  {
    label: 'Tabbar Links',
    title: 'Tabbar Links',
    description: 'Tabbar Links',
    url: 'https://taiga-ui.dev/navigation/tab-bar#links',
    component: TabbarLinksComponent,
  },
  {
    label: 'Tabbar Customization',
    title: 'Tabbar Customization',
    description: 'Tabbar Customization',
    url: 'https://taiga-ui.dev/navigation/tab-bar#customization',
    component: TabbarCustomizationComponent,
  },
  {
    label: 'Tabbar Skeleton',
    title: 'Tabbar Skeleton',
    description: 'Tabbar Skeleton',
    url: 'https://taiga-ui.dev/navigation/tab-bar#skeleton',
    component: TabbarSkeletonComponent,
  },
];
