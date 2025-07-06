import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { TuiHandler } from '@taiga-ui/cdk';

import { EMPTY_ARRAY } from '@taiga-ui/cdk';
import { TUI_TREE_CONTENT, TuiTree } from '@taiga-ui/kit';
import { PolymorpheusComponent } from '@taiga-ui/polymorpheus';

import { Folders } from './content';

interface TreeNode {
  readonly children?: readonly TreeNode[];
  readonly text: string;
}

@Component({
  selector: 'app-tree-custom',
  imports: [TuiTree],
  templateUrl: './tree-custom.component.html',
  styleUrl: './tree-custom.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TUI_TREE_CONTENT,
      useValue: new PolymorpheusComponent(Folders),
    },
  ],
})
export class TreeCustomComponent {
  protected readonly data: TreeNode = {
    text: 'Topmost',
    children: [
      {
        text: 'Top level 1',
        children: [
          {
            text: 'Another item',
            children: [{ text: 'Next level 1' }],
          },
        ],
      },
      {
        text: 'Top level 2',
        children: [{ text: 'Test 1' }],
      },
    ],
  };

  protected readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = (
    item
  ) => item.children || EMPTY_ARRAY;
}
