import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiBadge, tuiBadgeOptionsProvider } from '@taiga-ui/kit';

@Component({
  selector: 'app-badge-di',
  standalone: true,
  imports: [TuiBadge],
  templateUrl: './badge-di.component.html',
  styleUrl: './badge-di.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [tuiBadgeOptionsProvider({ appearance: 'primary' })],
})
export class BadgeDiComponent {}
