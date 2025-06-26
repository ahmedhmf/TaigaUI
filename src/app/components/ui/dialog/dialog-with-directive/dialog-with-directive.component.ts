import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { CustomDialogDirective } from './custom-dialog.directive';

@Component({
  selector: 'app-dialog-with-directive',
  imports: [CustomDialogDirective, TuiButton],
  templateUrl: './dialog-with-directive.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogWithDirectiveComponent {
  protected open = false;
}
