import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiIcon, TuiTextfield } from '@taiga-ui/core';
import { TuiCopy, TuiPassword } from '@taiga-ui/kit';

@Component({
  selector: 'app-textfield-interactive-icon',
  imports: [FormsModule, TuiCopy, TuiIcon, TuiPassword, TuiTextfield],
  templateUrl: './textfield-interactive-icon.component.html',
  styleUrl: './textfield-interactive-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextfieldInteractiveIconComponent {
  protected value = '';
}
