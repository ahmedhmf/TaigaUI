import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiNotification } from '@taiga-ui/core';

@Component({
  selector: 'app-no-items-found',
  standalone: true,
  imports: [TuiNotification],
  templateUrl: './no-items-found.component.html',
  styleUrl: './no-items-found.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoItemsFoundComponent {}
