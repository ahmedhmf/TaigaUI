
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { TuiHandler } from '@taiga-ui/cdk';
import { EMPTY_ARRAY, TuiMapperPipe } from '@taiga-ui/cdk';
import { TuiLabel } from '@taiga-ui/core';
import { TuiCheckbox, TuiTree } from '@taiga-ui/kit';

interface TreeNode {
  readonly children?: readonly TreeNode[];
  readonly text: string;
}

function flatten(item: TreeNode): readonly TreeNode[] {
  return item.children
    ? item.children.map(flatten).reduce((arr, item) => [...arr, ...item], [])
    : [item];
}

@Component({
  selector: 'app-tree-checkbox',
  imports: [
    FormsModule,
    TuiCheckbox,
    TuiLabel,
    TuiMapperPipe,
    TuiTree
],
  templateUrl: './tree-checkbox.component.html',
  styleUrl: './tree-checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeCheckboxComponent {
  protected map = new Map<TreeNode, boolean>();

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

  protected readonly getValue = (
    item: TreeNode,
    map: Map<TreeNode, boolean>
  ): boolean | null => {
    let result: boolean | null = null;
    const flat = flatten(item);
    const key = flat[0]!;

    if (key) {
      result = !!map.get(key);
    }

    for (const item of flat) {
      if (result !== !!map.get(item)) {
        return null;
      }
    }

    return result;
  };

  protected onChecked(node: TreeNode, value: boolean): void {
    flatten(node).forEach((item) => this.map.set(item, value));

    this.map = new Map(this.map.entries());
  }
}
