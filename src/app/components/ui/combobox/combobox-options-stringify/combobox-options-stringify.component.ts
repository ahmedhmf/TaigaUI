import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiStringHandler } from '@taiga-ui/cdk';
import { TuiDataListWrapper, tuiItemsHandlersProvider } from '@taiga-ui/kit';
import {
  TuiComboBoxModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

interface Employee {
  readonly dept: {
    readonly id: number;
    readonly title: string;
  };
  readonly id: number;
  readonly name: string;
}

const STRINGIFY_EMPLOYEE: TuiStringHandler<Employee> = (item: Employee) =>
  `${item.name} (${item.dept.title})`;

@Component({
  selector: 'app-combobox-options-stringify',
  imports: [
    ReactiveFormsModule,
    TuiComboBoxModule,
    TuiDataListWrapper,
    TuiTextfieldControllerModule,
  ],
  templateUrl: './combobox-options-stringify.component.html',
  styleUrl: './combobox-options-stringify.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [tuiItemsHandlersProvider({ stringify: STRINGIFY_EMPLOYEE })],
})
export class ComboboxOptionsStringifyComponent {
  protected readonly testValue = new FormControl<Employee | null>(null);

  protected readonly items: readonly Employee[] = [
    { id: 42, name: 'John Cleese', dept: { id: 566, title: 'Financial' } },
    { id: 237, name: 'Eric Idle', dept: { id: 560, title: 'Staffing' } },
    { id: 666, name: 'Michael Palin', dept: { id: 566, title: 'Financial' } },
    {
      id: 123,
      name: 'Terry Gilliam',
      dept: { id: 500, title: 'Administrative' },
    },
    { id: 777, name: 'Terry Jones', dept: { id: 566, title: 'Financial' } },
    { id: 999, name: 'Graham Chapman', dept: { id: 560, title: 'Staffing' } },
  ];

  protected readonly stringifyEmployee: TuiStringHandler<Employee> = (
    item: Employee
  ): string => {
    return `${item.name} (${item.dept.title})`;
  };
}
