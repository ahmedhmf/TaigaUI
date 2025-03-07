import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { TuiHandler } from '@taiga-ui/cdk';
import { EMPTY_ARRAY } from '@taiga-ui/cdk';
import { TuiButton } from '@taiga-ui/core';
import { TuiTree } from '@taiga-ui/kit';

interface TreeNode {
  readonly children?: readonly TreeNode[];
  readonly text: string;
}

@Component({
  selector: 'app-tree-programmatic-control',
  imports: [TuiButton, TuiTree],
  templateUrl: './tree-programmatic-control.component.html',
  styleUrl: './tree-programmatic-control.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeProgrammaticControlComponent {
  protected readonly data: TreeNode = {
    text: 'Topmost',
    children: [
      {
        text: 'Top level 1',
        children: [
          {
            text: 'Another item',
            children: [
              { text: 'Next level 1' },
              { text: 'Next level 2' },
              { text: 'Next level 3' },
            ],
          },
        ],
      },
      { text: 'Top level 2' },
      {
        text: 'Top level 3',
        children: [{ text: 'Test 1' }, { text: 'Test 2' }],
      },
    ],
  };

  protected readonly map = new Map<TreeNode, boolean>();

  protected readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = (
    item
  ) => item.children || EMPTY_ARRAY;

  protected toggleTopmost(): void {
    this.map.set(this.data, !this.map.get(this.data));
  }

  protected toggleLevel(index: number): void {
    const nodes: readonly TreeNode[] = this.data.children || [];
    const key = nodes[index];

    if (key) {
      this.map.set(key, !this.map.get(key));
    }
  }
}
