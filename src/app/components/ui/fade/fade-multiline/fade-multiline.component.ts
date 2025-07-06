import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiLink } from '@taiga-ui/core';
import { TuiFade } from '@taiga-ui/kit';

@Component({
  selector: 'app-fade-multiline',
  imports: [TuiFade, TuiLink],
  templateUrl: './fade-multiline.component.html',
  styleUrl: './fade-multiline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FadeMultilineComponent {
  protected expanded = false;

  protected toggle(): void {
    this.expanded = !this.expanded;
  }
}
