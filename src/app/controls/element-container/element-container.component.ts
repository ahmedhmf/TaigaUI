import {Component, inject, input} from '@angular/core';
import {TUI_IS_MOBILE} from "@taiga-ui/cdk";
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

  protected readonly isMobile = inject(TUI_IS_MOBILE);
}
