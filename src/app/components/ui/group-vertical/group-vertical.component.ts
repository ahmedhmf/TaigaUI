import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiGroup } from '@taiga-ui/core';
import { TuiBlock, TuiRadio } from '@taiga-ui/kit';

@Component({
  selector: 'app-group-vertical',
  imports: [ReactiveFormsModule, TuiBlock, TuiGroup, TuiRadio],
  templateUrl: './group-vertical.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupVerticalComponent {
  protected testForm = new FormGroup({
    testValue: new FormControl('orange'),
  });
}
