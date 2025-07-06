import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { tuiAsOptionContent, TuiTextfield } from '@taiga-ui/core';
import { TuiChevron, TuiDataListWrapper, TuiSelect } from '@taiga-ui/kit';
import { Option } from './options.component';

@Component({
  selector: 'app-select-override-option',
  imports: [
    ReactiveFormsModule,
    TuiChevron,
    TuiDataListWrapper,
    TuiSelect,
    TuiTextfield,
  ],
  templateUrl: './select-override-option.component.html',
  styleUrl: './select-override-option.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [tuiAsOptionContent(Option)],
})
export class SelectOverrideOptionComponent {
  protected readonly items = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
  ] as const;

  protected readonly control = new FormControl<string | null>(this.items[2]);
}
