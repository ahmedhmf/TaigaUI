import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TuiButton, TuiError, TuiTextfield } from '@taiga-ui/core';
import {
  TuiFieldErrorPipe,
  TuiInputDate,
  TuiUnfinishedValidator,
} from '@taiga-ui/kit';
import { TuiForm } from '@taiga-ui/layout';

@Component({
  selector: 'app-validation',
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    TuiButton,
    TuiError,
    TuiFieldErrorPipe,
    TuiForm,
    TuiInputDate,
    TuiTextfield,
    TuiUnfinishedValidator,
  ],
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidationComponent {
  protected readonly form = new FormGroup({
    required: new FormControl(null, Validators.required),
    optional: new FormControl(),
  });
}
