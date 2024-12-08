import { ComponentStructure } from './app.config';
import { LinkIconsComponent } from '../components/ui/link/link-icons/link-icons.component';
import { LinkLongTextComponent } from '../components/ui/link/link-long-text/link-long-text.component';
import { LinkVariantsComponent } from '../components/ui/link/link-variants/link-variants.component';
import { LinkComponent } from '../components/ui/link/link.component';

export const linkComponents: Omit<ComponentStructure, 'id'>[] = [
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
];
