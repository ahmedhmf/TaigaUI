import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiValidationError } from '@taiga-ui/cdk';
import { TuiError, TuiLabel } from '@taiga-ui/core';
import { TuiSwitch } from '@taiga-ui/kit';

@Component({
  selector: 'app-error',
  imports: [FormsModule, TuiError, TuiLabel, TuiSwitch],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent {
  protected enabled = false;

  protected error = new TuiValidationError('An error message');

  protected get computedError(): TuiValidationError | null {
    return this.enabled ? this.error : null;
  }
}
