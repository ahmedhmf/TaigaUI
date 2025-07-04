import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-element-card',
  templateUrl: './element-card.component.html',
  styleUrl: './element-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElementCardComponent {
  url = input<string>('');
  title = input<string>('');
  description = input<string>('');
}
