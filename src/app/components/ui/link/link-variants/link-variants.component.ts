import {Component} from '@angular/core';
import {TuiLink} from "@taiga-ui/core";
import {TuiAsideItemDirective} from "@taiga-ui/layout";

@Component({
    selector: 'app-link-variants',
    standalone: true,
    imports: [TuiAsideItemDirective, TuiLink],
    templateUrl: './link-variants.component.html',
    styleUrl: './link-variants.component.scss'
})
export class LinkVariantsComponent {
    protected onClick(event: MouseEvent): void {
        console.info('click', event);
    }
}
