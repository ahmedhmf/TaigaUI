import { BlockCustomComponent } from '../components/ui/block/block-custom/block-custom.component';
import { BlockGroupsComponent } from '../components/ui/block/block-groups/block-groups.component';
import { BlockSizesComponent } from '../components/ui/block/block-sizes/block-sizes.component';
import { ComponentStructure } from './app.config';

export const blockComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Block Sizes',
    title: 'Block Sizes',
    description: 'User can set sizes',
    url: 'https://taiga-ui.dev/components/block#sizes',
    component: BlockSizesComponent,
  },
  {
    label: 'Block Groups',
    title: 'Block Groups',
    description: 'User can group blocks vertically/horizontally',
    url: 'https://taiga-ui.dev/components/block#groups',
    component: BlockGroupsComponent,
  },
  {
    label: 'Block Custom',
    title: 'Block Custom',
    description: 'User can customize block',
    url: 'https://taiga-ui.dev/components/block#custom',
    component: BlockCustomComponent,
  },
];
