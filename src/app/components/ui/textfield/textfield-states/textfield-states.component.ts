import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiIcon, TuiTextfield } from '@taiga-ui/core';
import { TuiTooltip } from '@taiga-ui/kit';

@Component({
  selector: 'app-textfield-states',
  imports: [FormsModule, TuiIcon, TuiTextfield, TuiTooltip],
  templateUrl: './textfield-states.component.html',
  styleUrl: './textfield-states.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextfieldStatesComponent {
  protected value = 'Test';
}
