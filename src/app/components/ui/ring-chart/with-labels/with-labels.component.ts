import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiRingChart } from '@taiga-ui/addon-charts';
import { TuiAmountPipe } from '@taiga-ui/addon-commerce';
import { tuiSum } from '@taiga-ui/cdk';

@Component({
  selector: 'app-with-labels',
  imports: [AsyncPipe, TuiAmountPipe, TuiRingChart],
  templateUrl: './with-labels.component.html',
  styleUrl: './with-labels.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WithLabelsComponent {
  private readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'other'];
  protected readonly value = [13769, 12367, 10172, 3018, 2592];
  protected readonly total = tuiSum(...this.value);

  protected index = NaN;

  protected get sum(): number {
    return (
      (Number.isNaN(this.index) ? this.total : this.value[this.index]) ?? 0
    );
  }

  protected get label(): string {
    return (Number.isNaN(this.index) ? 'Total' : this.labels[this.index]) ?? '';
  }
}
