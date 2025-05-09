
import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { TuiHandler } from '@taiga-ui/cdk';
import { EMPTY_ARRAY } from '@taiga-ui/cdk';
import { TuiIcon } from '@taiga-ui/core';
import { TuiTree } from '@taiga-ui/kit';

interface TreeNode {
  readonly children?: readonly TreeNode[];
  readonly icon?: string;
  readonly text: string;
}

@Component({
  selector: 'app-tree-template',
  imports: [TuiIcon, TuiTree],
  templateUrl: './tree-template.component.html',
  styleUrl: './tree-template.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeTemplateComponent {
  protected readonly data: TreeNode = {
    text: 'Topmost',
    children: [
      {
        text: 'Top level 1',
        icon: '@tui.heart',
        children: [
          {
            text: 'Another item',
            children: [{ text: 'Next level 1', icon: '@tui.heart' }],
          },
        ],
      },
      { text: 'Top level 2' },
      {
        text: 'Top level 3',
        children: [{ text: 'Test 1' }, { text: 'Test 2', icon: '@tui.heart' }],
      },
    ],
  };

  protected readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = (
    item
  ) => item.children || EMPTY_ARRAY;
}
