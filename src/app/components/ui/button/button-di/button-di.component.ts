import { Component } from '@angular/core';
import {TuiButton, tuiButtonOptionsProvider} from "@taiga-ui/core";

@Component({
  selector: 'app-button-di',
  standalone: true,
  imports: [TuiButton],
  templateUrl: './button-di.component.html',
  styleUrl: './button-di.component.scss',
  providers: [tuiButtonOptionsProvider({size: 's'})],
})
export class ButtonDiComponent {

}
