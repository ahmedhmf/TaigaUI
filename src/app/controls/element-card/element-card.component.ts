import {Component, input} from '@angular/core';
import {TuiButton} from "@taiga-ui/core";
import {NgClass} from "@angular/common";

@Component({
    selector: 'app-element-card',
    standalone: true,
    imports: [
        TuiButton,
        NgClass
    ],
    templateUrl: './element-card.component.html',
    styleUrl: './element-card.component.scss'
})
export class ElementCardComponent {
    url = input<string>('');
    title = input<string>('');
    description = input<string>('');
}
