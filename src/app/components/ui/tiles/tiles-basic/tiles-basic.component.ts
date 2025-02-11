import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';
import { TuiTiles } from '@taiga-ui/kit';

@Component({
  selector: 'app-tiles-basic',
  imports: [TuiIcon, TuiTiles],
  templateUrl: './tiles-basic.component.html',
  styleUrl: './tiles-basic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TilesBasicComponent {
  protected items = [
    { w: 1, h: 1, content: 'Item 1' },
    { w: 1, h: 1, content: 'Item 2' },
    { w: 1, h: 1, content: 'Item 4' },
    { w: 1, h: 1, content: 'Item 6' },
    { w: 2, h: 2, content: 'rick' },
  ];

  protected order = new Map();
}
