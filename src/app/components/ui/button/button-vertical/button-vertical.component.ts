import { Component } from '@angular/core';
import { TuiAvatar, TuiFade } from '@taiga-ui/kit';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-button-vertical',
  imports: [TuiAvatar, TuiButton, TuiFade],
  templateUrl: './button-vertical.component.html',
  styleUrl: './button-vertical.component.scss',
})
export class ButtonVerticalComponent {}
