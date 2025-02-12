import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiNumberFormat, TuiScrollbar, TuiTextfield } from '@taiga-ui/core';
import { TuiInputNumber, TuiTabs } from '@taiga-ui/kit';

@Component({
  selector: 'app-tabs-active-index',
  imports: [
    FormsModule,
    TuiInputNumber,
    TuiNumberFormat,
    TuiScrollbar,
    TuiTabs,
    TuiTextfield,
  ],
  templateUrl: './tabs-active-index.component.html',
  styleUrl: './tabs-active-index.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsActiveIndexComponent {
  protected horizontalActiveIndex = 9;
  protected verticalActiveIndex = 10;
}
