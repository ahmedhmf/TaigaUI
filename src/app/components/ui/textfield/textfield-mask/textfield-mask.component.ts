import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import type { MaskitoOptions } from '@maskito/core';
import {
  maskitoAddOnFocusPlugin,
  maskitoCaretGuard,
  maskitoNumberOptionsGenerator,
  maskitoRemoveOnBlurPlugin,
} from '@maskito/kit';
import { TuiButton, TuiTextfield } from '@taiga-ui/core';

const postfix = ' rad';
const numberOptions = maskitoNumberOptionsGenerator({
  postfix,
  decimalSeparator: ',',
  precision: 8,
  min: 0,
});

@Component({
  selector: 'app-textfield-mask',
  imports: [FormsModule, MaskitoDirective, TuiButton, TuiTextfield],
  templateUrl: './textfield-mask.component.html',
  styleUrl: './textfield-mask.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextfieldMaskComponent {
  protected value = Math.PI.toFixed(8);
  protected readonly options: MaskitoOptions = {
    ...numberOptions,
    plugins: [
      ...numberOptions.plugins,
      maskitoCaretGuard((value) => [0, value.length - postfix.length]),
      maskitoAddOnFocusPlugin(postfix),
      maskitoRemoveOnBlurPlugin(postfix),
    ],
  };

  protected clear(): void {
    this.value = postfix;
  }
}
