import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiArcChart } from '@taiga-ui/addon-charts';
import { tuiSum } from '@taiga-ui/cdk';

@Component({
  selector: 'app-stacked',
  imports: [TuiArcChart],
  templateUrl: './stacked.component.html',
  styleUrl: './stacked.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackedComponent {
  protected readonly value = [13769, 12367, 10172, 3018, 2592];
  protected readonly sum = tuiSum(...this.value);
}
