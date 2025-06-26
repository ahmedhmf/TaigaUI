import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import { tuiDateFormatProvider, TuiTextfield } from '@taiga-ui/core';
import { TuiInputDate } from '@taiga-ui/kit';

@Component({
  selector: 'app-format',
  imports: [FormsModule, ReactiveFormsModule, TuiInputDate, TuiTextfield],
  templateUrl: './format.component.html',
  styleUrl: './format.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [tuiDateFormatProvider({ mode: 'MDY', separator: '/' })],
})
export class FormatComponent {
  protected value = new TuiDay(2017, 0, 15);
}
