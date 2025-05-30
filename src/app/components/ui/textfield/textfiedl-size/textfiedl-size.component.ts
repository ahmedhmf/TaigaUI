import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiIcon, TuiTextfield } from '@taiga-ui/core';
import { TuiTooltip } from '@taiga-ui/kit';

@Component({
  selector: 'app-textfiedl-size',
  imports: [FormsModule, TuiIcon, TuiTextfield, TuiTooltip],
  templateUrl: './textfiedl-size.component.html',
  styleUrl: './textfiedl-size.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextfiedlSizeComponent {
  protected value = '';
}
