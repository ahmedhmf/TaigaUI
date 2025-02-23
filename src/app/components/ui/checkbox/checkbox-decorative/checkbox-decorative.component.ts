import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { TuiCheckbox } from '@taiga-ui/kit';

@Component({
  selector: 'app-checkbox-decorative',
  imports: [TuiButton, TuiCheckbox],
  templateUrl: './checkbox-decorative.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxDecorativeComponent {
  protected checked = false;
}
