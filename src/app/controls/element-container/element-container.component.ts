import {Component, input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-element-container',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './element-container.component.html',
  styleUrl: './element-container.component.scss'
})
export class ElementContainerComponent {
  title= input<string>('');  
}
