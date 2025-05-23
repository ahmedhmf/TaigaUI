import { ScrollbarAllComponent } from '../components/ui/scrollbar/scrollbar-all/scrollbar-all.component';
import { ScrollbarHiddenComponent } from '../components/ui/scrollbar/scrollbar-hidden/scrollbar-hidden.component';
import { ScrollbarHorizontalComponent } from '../components/ui/scrollbar/scrollbar-horizontal/scrollbar-horizontal.component';
import { ScrollbarHoverComponent } from '../components/ui/scrollbar/scrollbar-hover/scrollbar-hover.component';
import { ScrollbarLightComponent } from '../components/ui/scrollbar/scrollbar-light/scrollbar-light.component';
import { ScrollbarNativeComponent } from '../components/ui/scrollbar/scrollbar-native/scrollbar-native.component';
import { ScrollbarVerticalComponent } from '../components/ui/scrollbar/scrollbar-vertical/scrollbar-vertical.component';
import { ScrollbarVirtualComponent } from '../components/ui/scrollbar/scrollbar-virtual/scrollbar-virtual.component';
import { ComponentStructure } from './app.config';

export const scrollbarComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Scrollbar Vertical',
    title: 'Scrollbar Vertical',
    description: 'Scrollbar Vertical',
    url: 'https://taiga-ui.dev/components/scrollbar#vertical',
    component: ScrollbarVerticalComponent,
  },
  {
    label: 'Scrollbar Horizontal',
    title: 'Scrollbar Horizontal',
    description: 'Scrollbar Horizontal',
    url: 'https://taiga-ui.dev/components/scrollbar#horizontal',
    component: ScrollbarHorizontalComponent,
  },
  {
    label: 'Scrollbar All',
    title: 'Scrollbar All',
    description: 'Scrollbar All',
    url: 'https://taiga-ui.dev/components/scrollbar#all',
    component: ScrollbarAllComponent,
  },
  {
    label: 'Scrollbar Hidden',
    title: 'Scrollbar Hidden',
    description: 'Scrollbar Hidden',
    url: 'https://taiga-ui.dev/components/scrollbar#hidden',
    component: ScrollbarHiddenComponent,
  },
  {
    label: 'Scrollbar Light',
    title: 'Scrollbar Light',
    description: 'Scrollbar Light',
    url: 'https://taiga-ui.dev/components/scrollbar#light-scrollbar',
    component: ScrollbarLightComponent,
  },
  {
    label: 'Scrollbar Virtual',
    title: 'Scrollbar Virtual',
    description: 'Scrollbar Virtual',
    url: 'https://taiga-ui.dev/components/scrollbar#virtual-scroll',
    component: ScrollbarVirtualComponent,
  },
  {
    label: 'Scrollbar on hover',
    title: 'Scrollbar on hover',
    description: 'Scrollbar on hover',
    url: 'https://taiga-ui.dev/components/scrollbar#show-scroll-bars-on-hover',
    component: ScrollbarHoverComponent,
  },
  {
    label: 'Scrollbar native',
    title: 'Scrollbar native',
    description: 'Scrollbar native',
    url: 'https://taiga-ui.dev/components/scrollbar#native-scrollbar',
    component: ScrollbarNativeComponent,
  },
];
