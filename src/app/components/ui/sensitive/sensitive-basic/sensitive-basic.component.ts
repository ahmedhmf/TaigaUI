import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiLabel } from '@taiga-ui/core';
import { TuiSensitive, TuiSwitch } from '@taiga-ui/kit';

@Component({
  selector: 'app-sensitive-basic',
  imports: [FormsModule, TuiLabel, TuiSensitive, TuiSwitch],
  templateUrl: './sensitive-basic.component.html',
  styleUrl: './sensitive-basic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SensitiveBasicComponent {
  protected sensitive = true;
}
