import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiChip } from '@taiga-ui/kit';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [TuiChip],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipComponent {}
