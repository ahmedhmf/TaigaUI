import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiTree } from '@taiga-ui/kit';

@Component({
  selector: 'app-tree-array',
  imports: [TuiTree],
  templateUrl: './tree-array.component.html',
  styleUrl: './tree-array.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeArrayComponent {
  protected readonly data = [
    'Top level 1',
    ['Second level item', ['Third level 1', 'Third level 2', 'Third level 3']],
    'Top level 2',
    'Top level 3',
    ['Second 1', 'Second 2'],
  ];
}
