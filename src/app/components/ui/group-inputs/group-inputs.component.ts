import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TuiError, TuiGroup, TuiHint } from '@taiga-ui/core';
import { TuiDataListWrapper, TuiFieldErrorPipe } from '@taiga-ui/kit';
import {
  TuiInputModule,
  TuiMultiSelectModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
  selector: 'app-group-inputs',
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    TuiDataListWrapper,
    TuiError,
    TuiFieldErrorPipe,
    TuiGroup,
    TuiHint,
    TuiInputModule,
    TuiMultiSelectModule,
    TuiTextfieldControllerModule,
  ],
  templateUrl: './group-inputs.component.html',
  styleUrl: './group-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupInputsComponent {
  protected readonly items = ['Option 1', 'Option 2', 'Option 3'];

  protected testForm = new FormGroup({
    testValue: new FormControl('', Validators.required),
    multiSelectControl: new FormControl<string[]>([], Validators.required),
    testValue3: new FormControl('', Validators.required),
  });
}
