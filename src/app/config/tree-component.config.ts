import { TreeArrayComponent } from '../components/ui/tree/array/tree-array.component';
import { TreeAsynchronousComponent } from '../components/ui/tree/asynchronous/tree-asynchronous.component';
import { TreeCheckboxComponent } from '../components/ui/tree/checkbox/tree-checkbox.component';
import { TreeCustomComponent } from '../components/ui/tree/custom/tree-custom.component';
import { TreeDragDropComponent } from '../components/ui/tree/drag-drop/tree-drag-drop.component';
import { TreeManualComponent } from '../components/ui/tree/manual/tree-manual.component';
import { TreeProgrammaticControlComponent } from '../components/ui/tree/programmatic-control/tree-programmatic-control.component';
import { TreeTemplateComponent } from '../components/ui/tree/template/tree-template.component';
import { ComponentStructure } from './app.config';

export const treeComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Tree Manual',
    title: 'Tree Manual',
    description: 'Tree',
    url: 'https://taiga-ui.dev/components/tree#manual',
    component: TreeManualComponent,
  },
  {
    label: 'Tree Array',
    title: 'Tree Array',
    description: 'Tree',
    url: 'https://taiga-ui.dev/components/tree#array',
    component: TreeArrayComponent,
  },
  {
    label: 'Tree Template',
    title: 'Tree Template',
    description: 'Tree',
    url: 'https://taiga-ui.dev/components/tree#template',
    component: TreeTemplateComponent,
  },
  {
    label: 'Tree Programmatic Control',
    title: 'Tree Programmatic Control',
    description: 'Tree',
    url: 'https://taiga-ui.dev/components/tree#programmatic',
    component: TreeProgrammaticControlComponent,
  },
  {
    label: 'Tree Custom',
    title: 'Tree Custom',
    description: 'Tree',
    url: 'https://taiga-ui.dev/components/tree#custom',
    component: TreeCustomComponent,
  },
  {
    label: 'Tree Checkbox',
    title: 'Tree Checkbox',
    description: 'Tree',
    url: 'https://taiga-ui.dev/components/tree#checkbox',
    component: TreeCheckboxComponent,
  },
  {
    label: 'Tree Asynchronous',
    title: 'Tree Asynchronous',
    description: 'Tree',
    url: 'https://taiga-ui.dev/components/tree#async',
    component: TreeAsynchronousComponent,
  },
  {
    label: 'Tree Drag Drop',
    title: 'Tree Drag Drop',
    description: 'Tree',
    url: 'https://taiga-ui.dev/components/tree#drag',
    component: TreeDragDropComponent,
  },
];
