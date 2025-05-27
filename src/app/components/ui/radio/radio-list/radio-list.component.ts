import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { TuiBooleanHandler } from '@taiga-ui/cdk';
import { TuiTitle } from '@taiga-ui/core';
import { TuiRadioList } from '@taiga-ui/kit';

@Component({
  selector: 'app-radio-list',
  imports: [FormsModule, ReactiveFormsModule, TuiRadioList, TuiTitle],
  templateUrl: './radio-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioListComponent {
  protected readonly form = new FormGroup({
    vertical: new FormControl('King Arthur', Validators.required),
    disabled: new FormControl({ value: null, disabled: true }),
  });

  protected readonly objects = [
    {
      name: 'King Arthur',
      description: 'Graham Chapman',
    },
    {
      name: "It's Man",
      description: 'Michael Palin',
    },
  ];

  protected readonly strings = ['King Arthur', "It's Man"];

  protected horizontal = this.strings[0]!;

  protected readonly handler: TuiBooleanHandler<string> = (item) =>
    item === this.strings[2]!;
}
