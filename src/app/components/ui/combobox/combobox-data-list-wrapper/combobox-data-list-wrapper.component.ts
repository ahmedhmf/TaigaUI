import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiDataListWrapper, TuiFilterByInputPipe } from '@taiga-ui/kit';
import { TuiComboBoxModule } from '@taiga-ui/legacy';

@Component({
  selector: 'app-combobox-data-list-wrapper',
  imports: [
    FormsModule,
    TuiComboBoxModule,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
  ],

  templateUrl: './combobox-data-list-wrapper.component.html',
  styleUrl: './combobox-data-list-wrapper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboboxDataListWrapperComponent {
  protected readonly items = inject<readonly string[]>('Pythons' as any);
  protected value = '';
}
