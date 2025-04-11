import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';
import { TuiBadgeNotification, TuiSegmented } from '@taiga-ui/kit';

@Component({
  selector: 'app-segmented-sizes',
  imports: [TuiBadgeNotification, TuiIcon, TuiSegmented],
  templateUrl: './segmented-sizes.component.html',
  styleUrl: './segmented-sizes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SegmentedSizesComponent {
  protected readonly sizes = ['s', 'm', 'l'] as const;
}
