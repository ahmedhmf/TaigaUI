import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAxes, TuiLineChart } from '@taiga-ui/addon-charts';
import type { TuiPoint } from '@taiga-ui/core';

@Component({
  selector: 'app-dotted',
  imports: [TuiAxes, TuiLineChart],
  templateUrl: './dotted.html',
  styleUrl: './dotted.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dotted {
  protected readonly dotted: readonly TuiPoint[] = [
    [50, 50],
    [100, 75],
    [150, 50],
  ];

  protected readonly solid: readonly TuiPoint[] = [
    [150, 50],
    [200, 150],
    [250, 155],
  ];

  protected readonly dashed: readonly TuiPoint[] = [
    [250, 155],
    [300, 190],
    [350, 90],
  ];
}
