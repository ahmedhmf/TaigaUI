import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiIcon, TuiTextfield } from '@taiga-ui/core';
import {
  TuiChevron,
  TuiDataListWrapper,
  TuiFilterByInputPipe,
  TuiTooltip,
} from '@taiga-ui/kit';

@Component({
  selector: 'app-textfield-drop-down',
  imports: [
    FormsModule,
    TuiChevron,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiIcon,
    TuiTextfield,
    TuiTooltip,
  ],
  templateUrl: './textfield-drop-down.component.html',
  styleUrl: './textfield-drop-down.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextfieldDropDownComponent {
  protected value = '';

  protected readonly items = inject<readonly string[]>('Pythons' as any);
}
