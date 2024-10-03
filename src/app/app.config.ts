import { Type } from '@angular/core';
import { badgeComponents } from './badge-components.config';
import { ButtonCloseComponent } from './components/ui/button/button-close/button-close.component';
import { ButtonDiComponent } from './components/ui/button/button-di/button-di.component';
import { ButtonGroupComponent } from './components/ui/button/button-group/button-group.component';
import { ButtonLoadingComponent } from './components/ui/button/button-loading/button-loading.component';
import { ButtonVerticalComponent } from './components/ui/button/button-vertical/button-vertical.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { IconExternalComponent } from './components/ui/icon/icon-external/icon-external.component';
import { IconResolverComponent } from './components/ui/icon/icon-resolver/icon-resolver.component';
import { IconTwoColorsComponent } from './components/ui/icon/icon-two-colors/icon-two-colors.component';
import { IconComponent } from './components/ui/icon/icon.component';
import { LinkIconsComponent } from './components/ui/link/link-icons/link-icons.component';
import { LinkLongTextComponent } from './components/ui/link/link-long-text/link-long-text.component';
import { LinkVariantsComponent } from './components/ui/link/link-variants/link-variants.component';
import { LinkComponent } from './components/ui/link/link.component';
import { loaderComponents } from './loader-components.config';

export type ComponentStructure = {
  id: number;
  label: string;
  title: string;
  description: string;
  url: string;
  component: Type<unknown>;
};

const components: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Buttons',
    title: 'Button',
    description: 'Button Control',
    url: 'https://taiga-ui.dev/components/button',
    component: ButtonComponent,
  },
  {
    label: 'Buttons Close',
    title: 'Button Close',
    description: 'Close Button Control',
    url: 'https://taiga-ui.dev/components/button-close',
    component: ButtonCloseComponent,
  },
  {
    label: 'Button Group',
    title: 'Button Group',
    description: 'Grouping Buttons in one control',
    url: 'https://taiga-ui.dev/components/button-group',
    component: ButtonGroupComponent,
  },
  {
    label: 'Button Loading',
    title: 'Button Loading',
    description: 'Button with a loading wheel',
    url: 'https://taiga-ui.dev/components/button#loading',
    component: ButtonLoadingComponent,
  },
  {
    label: 'Button With DI',
    title: 'Button With DI',
    description: 'Button that user can configure using Dependency Injection',
    url: 'https://taiga-ui.dev/components/button#options-with--di',
    component: ButtonDiComponent,
  },
  {
    label: 'Button Vertical',
    title: 'Button Vertical',
    description: 'Button with Icon in a vertical design',
    url: 'https://taiga-ui.dev/components/button#vertical',
    component: ButtonVerticalComponent,
  },
  {
    label: 'Links',
    title: 'Link',
    description: 'Link Control',
    url: 'https://taiga-ui.dev/components/link',
    component: LinkComponent,
  },
  {
    label: 'Links Icons',
    title: 'Link with Icon',
    description: 'A Link with an icon',
    url: 'https://taiga-ui.dev/components/link#icons',
    component: LinkIconsComponent,
  },
  {
    label: 'Links Variants',
    title: 'Link Variants',
    description: 'Variants of how links look like',
    url: 'https://taiga-ui.dev/components/link#variants',
    component: LinkVariantsComponent,
  },
  {
    label: 'Long Text Links',
    title: 'Long Text Link',
    description: 'Setting a long text to be a link',
    url: 'https://taiga-ui.dev/components/link#long-text',
    component: LinkLongTextComponent,
  },
  {
    label: 'Icons',
    title: 'Icon',
    description: 'Icon Control',
    url: 'https://taiga-ui.dev/components/icon',
    component: IconComponent,
  },
  {
    label: 'External Icons',
    title: 'External Icons',
    description: 'Icons from external source',
    url: 'https://taiga-ui.dev/components/icon#external',
    component: IconExternalComponent,
  },
  {
    label: 'Two Colors Icons',
    title: 'Two Colors Icons',
    description: 'Icons with 2 colors',
    url: 'https://taiga-ui.dev/components/icon#two-colors',
    component: IconTwoColorsComponent,
  },
  {
    label: 'Resolver Icons',
    title: 'Resolver Icons',
    description: 'User can provide your Icons using resolvers',
    url: 'https://taiga-ui.dev/components/icon#resolver',
    component: IconResolverComponent,
  },
  ...badgeComponents,
  ...loaderComponents,
];

// compute id to avoid error
const componentsWithIds: ComponentStructure[] = components.map((c, idx) => ({
  ...c,
  id: idx + 1,
}));

export const AppConfig = {
  components: componentsWithIds,
  componentTypeFilter: {
    label: 'Component type',
    placeHolder: 'Component type',
    items: componentsWithIds.map(({ id, label }) => ({ id, label })),
  },
};
