import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiRingChart } from '@taiga-ui/addon-charts';

@Component({
  selector: 'app-sizes',
  imports: [TuiRingChart],
  templateUrl: './sizes.component.html',
  styleUrl: './sizes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizesComponent {
  protected readonly value = [40, 30, 20, 10];
}
