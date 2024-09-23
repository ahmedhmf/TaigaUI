import { Component } from '@angular/core';
import {TuiAsideItemDirective} from "@taiga-ui/layout";
import {TuiLink} from "@taiga-ui/core";

@Component({
  selector: 'app-link-icons',
  standalone: true,
  imports: [TuiAsideItemDirective, TuiLink],
  templateUrl: './link-icons.component.html',
  styleUrl: './link-icons.component.scss'
})
export class LinkIconsComponent {

}
