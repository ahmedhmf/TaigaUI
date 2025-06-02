import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiDropdown, TuiLink } from '@taiga-ui/core';
import { TuiAvatar, TuiSwitch } from '@taiga-ui/kit';

@Component({
  selector: 'app-dropdown-interesting',
  imports: [FormsModule, TuiAvatar, TuiDropdown, TuiLink, TuiSwitch],
  templateUrl: './dropdown-interesting.component.html',
  styleUrl: './dropdown-interesting.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownInterestingComponent {
  protected open = false;
  protected avatarUrl = `https://taiga-ui.dev/assets/images/avatar.jpg`;
}
