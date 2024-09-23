import {Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiLink } from '@taiga-ui/core';

@Component({
    selector: 'app-link',
    standalone: true,
    imports: [RouterLink, TuiLink],
    templateUrl: './link.component.html',
    styleUrl: './link.component.scss'
})
export class LinkComponent {
}
