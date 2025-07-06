import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  TuiAxes,
  TuiLineChart,
  TuiLineChartHint,
} from '@taiga-ui/addon-charts';
import type { TuiContext } from '@taiga-ui/cdk';
import type { TuiPoint } from '@taiga-ui/core';

@Component({
  selector: 'app-line',
  imports: [TuiAxes, TuiLineChart, TuiLineChartHint],
  templateUrl: './line.html',
  styleUrl: './line.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Line {
  protected readonly value: readonly TuiPoint[] = [
    [50, 50],
    [100, 75],
    [150, 50],
    [200, 150],
    [250, 155],
    [300, 190],
    [350, 90],
  ];

  protected readonly stringify = String;

  protected readonly hintContent = ({
    $implicit,
  }: TuiContext<readonly TuiPoint[]>): number => $implicit[0]?.[1] ?? 0;
}
