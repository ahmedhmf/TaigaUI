import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { TuiPreview, TuiPreviewDialogDirective } from '@taiga-ui/kit';
import { PolymorpheusOutlet } from '@taiga-ui/polymorpheus';

@Component({
  selector: 'app-with-directive',
  imports: [
    PolymorpheusOutlet,
    TuiButton,
    TuiPreview,
    TuiPreviewDialogDirective,
  ],
  templateUrl: './with-directive.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WithDirectiveComponent {
  protected open = false;
  protected index = 0;
  protected length = 2;
  protected titles = ['pic_1.jpg', 'pic_2.jpg'];
  protected content = [
    'https://picsum.photos/600/500',
    'https://picsum.photos/500/600',
  ];
}
