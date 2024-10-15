import { ComponentStructure } from './app.config';
import { BadgeContentTypeComponent } from './components/ui/badge/badge-content-type/badge-content-type.component';
import { BadgeCustomComponent } from './components/ui/badge/badge-custom/badge-custom.component';
import { BadgeDiComponent } from './components/ui/badge/badge-di/badge-di.component';
import { BadgeLongComponent } from './components/ui/badge/badge-long/badge-long.component';
import { BadgeSizesComponent } from './components/ui/badge/badge-sizes/badge-sizes.component';
import { BadgeComponent } from './components/ui/badge/badge/badge.component';

export const badgeComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Badge',
    title: 'Badge basic',
    description: 'Badge Control',
    url: 'https://taiga-ui.dev/components/badge',
    component: BadgeComponent,
  },
  {
    label: 'Badge sizes',
    title: 'Badge sizes',
    description: 'User can set sizes',
    url: 'https://taiga-ui.dev/components/badge#sizes',
    component: BadgeSizesComponent,
  },
  {
    label: 'Badge content type',
    title: 'Badge content type',
    description: 'User can provide icons and images',
    url: 'https://taiga-ui.dev/components/badge#content-type',
    component: BadgeContentTypeComponent,
  },
  {
    label: 'Badge long',
    title: 'Badge long',
    description: 'User can project long text',
    url: 'https://taiga-ui.dev/components/badge#long-value',
    component: BadgeLongComponent,
  },
  {
    label: 'Badge customization',
    title: 'Badge customization',
    description: 'User can customize appearance',
    url: 'https://taiga-ui.dev/components/badge#customization',
    component: BadgeCustomComponent,
  },
  {
    label: 'Badge with DI',
    title: 'Badge With DI',
    description: 'Badge configured with Dependency Injection',
    url: 'https://taiga-ui.dev/components/badge#options',
    component: BadgeDiComponent,
  },
];
