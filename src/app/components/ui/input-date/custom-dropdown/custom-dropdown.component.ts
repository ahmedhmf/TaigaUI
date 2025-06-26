import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import { TuiButton, TuiTextfield } from '@taiga-ui/core';
import { TuiInputDate } from '@taiga-ui/kit';

@Component({
  selector: 'app-custom-dropdown',
  imports: [ReactiveFormsModule, TuiButton, TuiInputDate, TuiTextfield],
  templateUrl: './custom-dropdown.component.html',
  styleUrl: './custom-dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomDropdownComponent {
  protected readonly control = new FormControl<TuiDay | null>(null);
  protected readonly today = TuiDay.currentLocal();
}
