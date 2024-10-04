import { Component } from '@angular/core';
import { TuiLoader } from '@taiga-ui/core';

@Component({
  selector: 'app-loader-background',
  standalone: true,
  imports: [TuiLoader],
  templateUrl: './loader-background.component.html',
  styleUrl: './loader-background.component.scss'
})
export class LoaderBackgroundComponent {

}
