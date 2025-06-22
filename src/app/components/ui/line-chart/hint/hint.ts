import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAxes, TuiLineChart } from '@taiga-ui/addon-charts';
import type { TuiContext, TuiStringHandler } from '@taiga-ui/cdk';
import type { TuiPoint } from '@taiga-ui/core';
import { TuiHint } from '@taiga-ui/core';

@Component({
  selector: 'app-hint',
  imports: [TuiAxes, TuiHint, TuiLineChart],
  templateUrl: './hint.html',
  styleUrl: './hint.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hint {
  protected readonly value: TuiPoint[] = [
    [50, 50],
    [100, 75],
    [150, 50],
    [200, 150],
    [250, 155],
    [300, 190],
    [350, 90],
  ];

  protected readonly singleValue: TuiPoint[] = [[200, 150]];

  protected readonly hint: TuiStringHandler<TuiContext<TuiPoint>> = ({
    $implicit,
  }) => `Vertical: ${$implicit[1]}\nHorizontal: ${$implicit[0]}`;
}
