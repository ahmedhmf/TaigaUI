import { NgForOf, NgIf, SlicePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { TuiAvatar, TuiChip } from '@taiga-ui/kit';

@Component({
  selector: 'app-chip-size-content',
  standalone: true,
  imports: [NgForOf, NgIf, TuiButton, TuiChip],
  templateUrl: './chip-size-content.component.html',
  styleUrl: './chip-size-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipSizeContentComponent {
  protected readonly sizes = ['m', 's', 'xs'] as const;
}
