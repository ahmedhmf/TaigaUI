import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiSegmented } from '@taiga-ui/kit';

@Component({
  selector: 'app-segmented-customization',
  imports: [TuiSegmented],
  templateUrl: './segmented-customization.component.html',
  styleUrl: './segmented-customization.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SegmentedCustomizationComponent {
  protected readonly buttons = [
    'Track active index',
    'To color tabs',
    'Differently',
  ];
  protected active = 0;
}
