import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiActiveZone, TuiObscured } from '@taiga-ui/cdk';
import { TuiButton, TuiDropdown } from '@taiga-ui/core';
import { TuiChevron } from '@taiga-ui/kit';

@Component({
  selector: 'app-dropdown-basic',
  imports: [TuiActiveZone, TuiButton, TuiChevron, TuiDropdown, TuiObscured],
  templateUrl: './dropdown-basic.component.html',
  styleUrl: './dropdown-basic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownBasicComponent {
  protected open = false;

  protected onClick(): void {
    this.open = !this.open;
  }

  protected onObscured(obscured: boolean): void {
    if (obscured) {
      this.open = false;
    }
  }

  protected onActiveZone(active: boolean): void {
    this.open = active && this.open;
  }
}
