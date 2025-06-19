import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-element-container',
  templateUrl: './element-container.component.html',
  styleUrl: './element-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElementContainerComponent {
  title = input<string>('');
}
