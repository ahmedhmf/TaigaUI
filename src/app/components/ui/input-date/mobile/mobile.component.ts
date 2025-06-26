import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiDropdownMobile } from '@taiga-ui/addon-mobile';
import { TuiDay } from '@taiga-ui/cdk';
import { TuiTextfield } from '@taiga-ui/core';
import { TuiInputDate } from '@taiga-ui/kit';
import { TuiForm } from '@taiga-ui/layout';

@Component({
  selector: 'app-mobile',
  imports: [
    ReactiveFormsModule,
    TuiDropdownMobile,
    TuiForm,
    TuiInputDate,
    TuiTextfield,
  ],
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileComponent {
  protected readonly form = new FormGroup({
    native: new FormControl(TuiDay.currentLocal()),
    mobile: new FormControl(TuiDay.currentLocal().append({ day: 1 })),
    fullscreen: new FormControl(TuiDay.currentLocal().append({ day: 2 })),
  });
}
