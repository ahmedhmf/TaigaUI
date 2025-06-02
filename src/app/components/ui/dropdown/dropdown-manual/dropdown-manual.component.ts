import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiAppearance, TuiDropdown, TuiLabel } from '@taiga-ui/core';
import { TuiSwitch } from '@taiga-ui/kit';
import { TuiCardLarge } from '@taiga-ui/layout';

@Component({
  selector: 'app-dropdown-manual',
  imports: [
    FormsModule,
    TuiAppearance,
    TuiCardLarge,
    TuiDropdown,
    TuiLabel,
    TuiSwitch,
  ],
  templateUrl: './dropdown-manual.component.html',
  styleUrl: './dropdown-manual.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownManualComponent {
  protected open = false;
}
