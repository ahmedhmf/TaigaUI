import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiSwitch } from '@taiga-ui/kit';

@Component({
  selector: 'app-switch-same-color',
  imports: [FormsModule, TuiSwitch],
  templateUrl: './switch-same-color.component.html',
  styleUrl: './switch-same-color.component.scss',
})
export class SwitchSameColorComponent {
  protected value = false;
}
