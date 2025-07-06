import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiTree } from '@taiga-ui/kit';

@Component({
  selector: 'app-tree-manual',
  imports: [TuiTree],
  templateUrl: './tree-manual.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeManualComponent {}
