import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import type { TuiContext } from '@taiga-ui/cdk';
import { TuiDataList, TuiTextfield } from '@taiga-ui/core';
import { TuiChevron, TuiSelect } from '@taiga-ui/kit';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';

interface Python {
  readonly id: number;
  readonly name: string;
}

@Component({
  selector: 'app-select-form-control',
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    TuiChevron,
    TuiDataList,
    TuiSelect,
    TuiTextfield,
  ],
  templateUrl: './select-form-control.component.html',
  styleUrl: './select-form-control.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectFormControlComponent {
  protected readonly control = new FormControl<number | null>(777);

  protected readonly items: readonly Python[] = [
    { id: 42, name: 'John Cleese' },
    { id: 237, name: 'Eric Idle' },
    { id: 666, name: 'Michael Palin' },
    { id: 123, name: 'Terry Gilliam' },
    { id: 777, name: 'Terry Jones' },
    { id: 999, name: 'Graham Chapman' },
  ];

  protected readonly content: PolymorpheusContent<TuiContext<number | null>> =
    ({ $implicit: id }) =>
      this.items.find((item) => item.id === id)?.name ?? '';
}
