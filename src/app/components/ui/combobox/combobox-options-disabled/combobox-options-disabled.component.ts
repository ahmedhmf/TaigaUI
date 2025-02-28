import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiDataList } from '@taiga-ui/core';
import { TuiFilterByInputPipe } from '@taiga-ui/kit';
import { TuiComboBoxModule } from '@taiga-ui/legacy';

@Component({
  selector: 'app-combobox-options-disabled',
  imports: [
    FormsModule,
    JsonPipe,
    TuiComboBoxModule,
    TuiDataList,
    TuiFilterByInputPipe
],
  templateUrl: './combobox-options-disabled.component.html',
  styleUrl: './combobox-options-disabled.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboboxOptionsDisabledComponent {
  protected value = null;

  protected readonly items = [
    { name: 'John', surname: 'Cleese', disabled: false },
    { name: 'Eric', surname: 'Idle', disabled: false },
    { name: 'Graham', surname: 'Chapman', disabled: true },
    { name: 'Michael', surname: 'Palin', disabled: true },
    { name: 'Terry', surname: 'Gilliam', disabled: false },
    { name: 'Terry', surname: 'Jones', disabled: false },
  ];

  protected readonly stringify = (item: {
    name: string;
    surname: string;
  }): string => `${item.name} ${item.surname}`;
}
