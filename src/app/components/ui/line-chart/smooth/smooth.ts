import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAxes, TuiLineChart } from '@taiga-ui/addon-charts';
import type { TuiPoint } from '@taiga-ui/core';

@Component({
  selector: 'app-smooth',
  imports: [TuiAxes, TuiLineChart],
  templateUrl: './smooth.html',
  styleUrl: './smooth.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Smooth {
  protected readonly value: readonly TuiPoint[] = [
    [50, 50],
    [100, 75],
    [150, 50],
    [200, 150],
    [250, 155],
    [300, 190],
    [350, 90],
  ];
}
