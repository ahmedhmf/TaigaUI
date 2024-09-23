import {Component} from '@angular/core';
import {TuiButton, TuiOption} from "@taiga-ui/core";
import {TuiButtonClose} from "@taiga-ui/kit";

@Component({
    selector: 'app-button-close',
    standalone: true,
    imports: [
        TuiButton,
        TuiButtonClose,
        TuiOption
    ],
    templateUrl: './button-close.component.html',
    styleUrl: './button-close.component.scss'
})
export class ButtonCloseComponent {

}
