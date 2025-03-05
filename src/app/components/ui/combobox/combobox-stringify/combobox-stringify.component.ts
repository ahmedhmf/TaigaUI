import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  TuiDataListWrapper,
  TuiFilterByInputPipe,
  TuiStringifyContentPipe,
} from '@taiga-ui/kit';
import { TuiComboBoxModule } from '@taiga-ui/legacy';

@Component({
  selector: 'app-combobox-stringify',
  imports: [
    FormsModule,
    TuiComboBoxModule,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiStringifyContentPipe,
  ],
  templateUrl: './combobox-stringify.component.html',
  styleUrl: './combobox-stringify.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboboxStringifyComponent {
  protected value = null;

  protected readonly items = [
    { name: 'John', surname: 'Cleese' },
    { name: 'Eric', surname: 'Idle' },
    { name: 'Graham', surname: 'Chapman' },
    { name: 'Michael', surname: 'Palin' },
    { name: 'Terry', surname: 'Gilliam' },
    { name: 'Terry', surname: 'Jones' },
  ];

  protected readonly stringify = (item: {
    name: string;
    surname: string;
  }): string => `${item.name} ${item.surname}`;
}
