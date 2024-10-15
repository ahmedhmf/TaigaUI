import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TuiButton } from '@taiga-ui/core';
import {
  TuiBadgedContent,
  TuiBadgeNotification,
  TuiChip,
  TuiFade,
} from '@taiga-ui/kit';

@Component({
  selector: 'app-chip-use-cases',
  standalone: true,
  imports: [
    TuiBadgedContent,
    TuiBadgeNotification,
    TuiButton,
    TuiChip,
    TuiFade,
  ],
  templateUrl: './chip-use-cases.component.html',
  styleUrl: './chip-use-cases.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipUseCasesComponent {
  protected selected = false;
}
