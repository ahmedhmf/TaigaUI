
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  signal,
} from '@angular/core';
import type { TuiHandler } from '@taiga-ui/cdk';
import { EMPTY_ARRAY } from '@taiga-ui/cdk';
import { TuiTiles, TuiTree } from '@taiga-ui/kit';

interface TreeNode {
  children?: readonly TreeNode[];
  text: string;
}

@Component({
  selector: 'app-tree-drag-drop',
  imports: [TuiTiles, TuiTree],
  templateUrl: './tree-drag-drop.component.html',
  styleUrl: './tree-drag-drop.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeDragDropComponent {
  protected drag = signal<TreeNode | null>(null);

  protected readonly cd = inject(ChangeDetectorRef);

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

  protected onDrag(drag: TreeNode): void {
    this.drag.set(drag);
  }

  protected onDrop(target: TreeNode, position = 0): void {
    const drag = this.drag();

    if (!drag) {
      return;
    }

    const dragParent = findParent(drag, this.data);
    const targetParent = findParent(target, this.data);

    if (dragParent) {
      dragParent.children = dragParent?.children?.filter(
        (item) => item !== drag
      );
    }

    const index = (targetParent?.children?.indexOf(target) ?? 0) + position;

    if (targetParent?.children) {
      targetParent.children = [
        ...targetParent.children.slice(0, index),
        drag,
        ...targetParent.children.slice(index),
      ];
    }

    this.drag.set(null);
  }
}

function findParent(item: TreeNode, node: TreeNode): TreeNode | null {
  if (!node.children) {
    return null;
  }

  if (node.children.includes(item)) {
    return node;
  }

  for (const iterateItem of node.children) {
    const parent = findParent(item, iterateItem);

    if (parent) {
      return parent;
    }
  }

  return null;
}
