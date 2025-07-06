import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiTextfield } from '@taiga-ui/core';
import { TuiChevron, TuiSelect } from '@taiga-ui/kit';

@Component({
  selector: 'app-select-native-picker-grouping-options',
  imports: [ReactiveFormsModule, TuiChevron, TuiSelect, TuiTextfield],
  templateUrl: './select-native-picker-grouping-options.component.html',
  styleUrl: './select-native-picker-grouping-options.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectNativePickerGroupingOptionsComponent {
  protected groupItems: ReadonlyArray<readonly string[]> = [
    ['Caesar', 'Greek', 'Apple and Chicken'],
    ['Broccoli Cheddar', 'Chicken and Rice', 'Chicken Noodle'],
  ];

  protected readonly labels = ['Salad', 'Soup'];
  protected readonly control = new FormControl<string | null>(null);
}
