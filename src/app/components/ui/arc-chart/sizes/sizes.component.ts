import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiArcChart } from '@taiga-ui/addon-charts';
import { TuiNumberFormat, TuiTextfield } from '@taiga-ui/core';
import { TuiInputNumber } from '@taiga-ui/kit';

@Component({
  selector: 'app-sizes',
  imports: [
    FormsModule,
    TuiArcChart,
    TuiInputNumber,
    TuiNumberFormat,
    TuiTextfield,
  ],
  templateUrl: './sizes.component.html',
  styleUrl: './sizes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizesComponent {
  protected readonly value = [40, 30, 20, 10];

  protected activeItemIndex = NaN;

  public onTextfieldChange(value: number | null): void {
    this.activeItemIndex = value ?? NaN;
  }
}
