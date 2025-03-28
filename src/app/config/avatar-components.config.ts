import { AvatarColorsComponent } from '../components/ui/avatar/avatar-colors/avatar-colors.component';
import { AvatarContentTypesComponent } from '../components/ui/avatar/avatar-content-types/avatar-content-types.component';
import { AvatarDiComponent } from '../components/ui/avatar/avatar-di/avatar-di.component';
import { AvatarLabeledComponent } from '../components/ui/avatar/avatar-labeled/avatar-labeled.component';
import { AvatarOutlineComponent } from '../components/ui/avatar/avatar-outline/avatar-outline.component';
import { AvatarSizesComponent } from '../components/ui/avatar/avatar-sizes/avatar-sizes.component';
import { AvatarStackingComponent } from '../components/ui/avatar/avatar-stacking/avatar-stacking.component';
import { ComponentStructure } from './app.config';

export const avatarComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Avatar Content Types',
    title: 'Avatar Content Types',
    description: 'Avatar Content Types',
    url: 'https://taiga-ui.dev/components/avatar#content-types',
    component: AvatarContentTypesComponent,
  },
  {
    label: 'Avatar Colors',
    title: 'Avatar Colors',
    description: 'Avatar Colors',
    url: 'https://taiga-ui.dev/components/avatar#colors',
    component: AvatarColorsComponent,
  },
  {
    label: 'Avatar Sizes',
    title: 'Avatar Sizes',
    description: 'Avatar Sizes',
    url: 'https://taiga-ui.dev/components/avatar#sizes',
    component: AvatarSizesComponent,
  },
  {
    label: 'Avatar Stacking',
    title: 'Avatar Stacking',
    description: 'Avatar Stacking',
    url: 'https://taiga-ui.dev/components/avatar#stacking',
    component: AvatarStackingComponent,
  },
  {
    label: 'Avatar DI',
    title: 'Avatar DI',
    description: 'Avatar Options with DI',
    url: 'https://taiga-ui.dev/components/avatar#options-with--di',
    component: AvatarDiComponent,
  },
  {
    label: 'Avatar Labeled',
    title: 'Avatar Labeled',
    description: 'Avatar Labeled',
    url: 'https://taiga-ui.dev/components/avatar#labeled',
    component: AvatarLabeledComponent,
  },
  {
    label: 'Avatar Outline',
    title: 'Avatar Outline',
    description: 'Avatar Outline',
    url: 'https://taiga-ui.dev/components/avatar#outline',
    component: AvatarOutlineComponent,
  },
];
