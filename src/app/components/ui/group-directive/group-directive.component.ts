import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiGroup, TuiTitle } from '@taiga-ui/core';
import { TuiBlock, TuiRadio } from '@taiga-ui/kit';

@Component({
  selector: 'app-group-directive',
  imports: [ReactiveFormsModule, TuiBlock, TuiGroup, TuiRadio, TuiTitle],

  templateUrl: './group-directive.component.html',
  styleUrl: './group-directive.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupDirectiveComponent {
  protected readonly testForm = new FormGroup({
    testValue: new FormControl(''),
  });
}
