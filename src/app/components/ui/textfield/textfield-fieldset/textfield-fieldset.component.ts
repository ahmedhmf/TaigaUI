import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiTextfield } from '@taiga-ui/core';
import { TuiSwitch } from '@taiga-ui/kit';

@Component({
  selector: 'app-textfield-fieldset',
  imports: [FormsModule, TuiSwitch, TuiTextfield],
  templateUrl: './textfield-fieldset.component.html',
  styleUrl: './textfield-fieldset.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextfieldFieldsetComponent {
  protected readonly disable = signal(true);
  protected card = '1111 1111 1111 1111';
  protected name = 'Test User';
}
