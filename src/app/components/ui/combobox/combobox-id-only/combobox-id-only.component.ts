import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  TuiDataListWrapper,
  TuiFilterByInputPipe,
  TuiStringifyContentPipe,
} from '@taiga-ui/kit';
import { TuiComboBoxModule } from '@taiga-ui/legacy';

interface Dictionary {
  readonly id: number;
  readonly name: string;
}

const DICTIONARY: Dictionary[] = [
  { id: 1, name: 'Luke Skywalker' },
  { id: 2, name: 'Princess Leia' },
  { id: 3, name: 'Darth Vader' },
  { id: 4, name: 'Han Solo' },
  { id: 5, name: 'Obi-Wan Kenobi' },
  { id: 6, name: 'Yoda' },
];

@Component({
  selector: 'app-combobox-id-only',
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    TuiComboBoxModule,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiStringifyContentPipe,
  ],
  templateUrl: './combobox-id-only.component.html',
  styleUrl: './combobox-id-only.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboboxIdOnlyComponent {
  protected readonly control = new FormControl(3);
  protected readonly items = DICTIONARY.map(({ id }) => id);
  protected readonly stringify = (id: number): string =>
    DICTIONARY.find((item) => item.id === id)?.name || '';
}
