import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiIcon, TuiTextfield } from '@taiga-ui/core';
import { TuiChevron, TuiDataListWrapper, TuiTooltip } from '@taiga-ui/kit';

@Component({
  selector: 'app-select-textfield-custom',
  imports: [
    FormsModule,
    TuiChevron,
    TuiDataListWrapper,
    TuiIcon,
    TuiTextfield,
    TuiTooltip,
  ],
  templateUrl: './select-textfield-custom.component.html',
  styleUrl: './select-textfield-custom.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectTextfieldCustomComponent {
  protected readonly users = [
    'Dmitriy Demenskiy',
    'Alex Inkin',
    'Vladimir Potekhin',
    'Nikita Barsukov',
    'Maxim Ivanov',
    'German Panov',
  ];

  protected value: string | null = null;
}
