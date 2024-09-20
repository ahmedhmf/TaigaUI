import {Component} from '@angular/core';
import {TuiAsideItemDirective} from "@taiga-ui/layout";
import {TuiButton, TuiIcon, TuiSurface} from "@taiga-ui/core";
import {TuiButtonClose, TuiButtonGroup, TuiIconBadge} from "@taiga-ui/kit";
import {ElementCardComponent} from "../../../controls/element-card/element-card.component";
import {ElementContainerComponent} from "../../../controls/element-container/element-container.component";

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [
        TuiAsideItemDirective,
        TuiButton,
        TuiButtonClose,
        ElementCardComponent,
        TuiIcon,
        TuiButtonGroup,
        TuiIconBadge,
        TuiSurface,
        ElementContainerComponent
    ],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss'
})
export class ButtonComponent {
}
