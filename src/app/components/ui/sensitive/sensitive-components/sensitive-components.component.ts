import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiButton, TuiLabel } from '@taiga-ui/core';
import { TuiBadge, TuiSensitive, TuiSwitch } from '@taiga-ui/kit';

@Component({
  selector: 'app-sensitive-components',
  imports: [
    FormsModule,
    TuiBadge,
    TuiButton,
    TuiLabel,
    TuiSensitive,
    TuiSwitch,
  ],
  templateUrl: './sensitive-components.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SensitiveComponentsComponent {
  protected sensitive = true;
}
