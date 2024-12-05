import { Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { TuiButtonClose } from '@taiga-ui/kit';

@Component({
  selector: 'app-button-close',
  imports: [TuiButton, TuiButtonClose],
  templateUrl: './button-close.component.html',
  styleUrl: './button-close.component.scss',
})
export class ButtonCloseComponent {}
