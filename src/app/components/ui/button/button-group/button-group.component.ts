import {Component} from '@angular/core';
import {TuiButton, TuiIcon, TuiSurface} from "@taiga-ui/core";
import {TuiButtonGroup, TuiIconBadge} from "@taiga-ui/kit";

@Component({
    selector: 'app-button-group',
    standalone: true,
    imports: [
        TuiButton,
        TuiButtonGroup,
        TuiIcon,
        TuiIconBadge,
        TuiSurface
    ],
    templateUrl: './button-group.component.html',
    styleUrl: './button-group.component.scss'
})
export class ButtonGroupComponent {

}
