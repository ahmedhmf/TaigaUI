import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiHint } from '@taiga-ui/core';

@Component({
    selector: 'app-hint-auto',
    imports: [TuiHint],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './hint-auto.component.html',
    styleUrl: './hint-auto.component.scss'
})
export class HintAutoComponent {

}
