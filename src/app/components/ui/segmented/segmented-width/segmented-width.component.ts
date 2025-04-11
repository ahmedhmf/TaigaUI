import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiFade, TuiSegmented } from '@taiga-ui/kit';

@Component({
  selector: 'app-segmented-width',
  imports: [TuiFade, TuiSegmented],
  templateUrl: './segmented-width.component.html',
  styleUrl: './segmented-width.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SegmentedWidthComponent {}
