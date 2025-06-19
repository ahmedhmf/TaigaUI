import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiDropdown, TuiLabel } from '@taiga-ui/core';
import { TuiSwitch } from '@taiga-ui/kit';

@Component({
  selector: 'app-dropdown-appereance',
  imports: [FormsModule, TuiDropdown, TuiLabel, TuiSwitch],

  templateUrl: './dropdown-appereance.component.html',
  styleUrl: './dropdown-appereance.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownAppereanceComponent {
  protected open = false;
}
