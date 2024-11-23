import {Component} from '@angular/core';
import { TuiIcon, TuiIconPipe } from '@taiga-ui/core';

@Component({
    selector: 'app-icon',
    imports: [TuiIcon, TuiIconPipe],
    templateUrl: './icon.component.html',
    styleUrl: './icon.component.scss'
})
export class IconComponent {
}
