import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiSelect, TuiTextfield } from '@taiga-ui/core';
import {
  TuiChevron,
  TuiDataListWrapper,
  tuiItemsHandlersProvider,
} from '@taiga-ui/kit';

interface Character {
  readonly id: number;
  readonly name: string;
}

@Component({
  selector: 'app-select-itemd-handler',
  imports: [
    FormsModule,
    TuiChevron,
    TuiDataListWrapper,
    TuiSelect,
    TuiTextfield,
  ],
  templateUrl: './select-itemd-handler.component.html',
  styleUrl: './select-itemd-handler.component.scss',
  providers: [
    tuiItemsHandlersProvider({
      stringify: (item: Character) => item.name,
      identityMatcher: (item1: Character, item2: Character) =>
        item1.id === item2.id,
      disabledItemHandler: (item: Character) => item.name.includes('Trevor'),
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectItemdHandlerComponent {
  protected readonly users: Character[] = [
    { id: 42, name: 'Tommy Vercetti' },
    { id: 237, name: 'Carl Johnson' },
    { id: 666, name: 'Niko Bellic' },
    { id: 999, name: 'Trevor Philips' },
    { id: 123, name: 'Michael De Santa' },
    { id: 777, name: 'Franklin Clinton' },
  ];

  protected value: Character | null = { id: 42, name: 'Tommy Vercetti' }; // !== this.users[0]
}
