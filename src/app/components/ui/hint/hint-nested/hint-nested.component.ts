import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiHint } from '@taiga-ui/core';
import { TuiBadge } from '@taiga-ui/kit';

@Component({
    selector: 'app-hint-nested',
    imports: [TuiBadge, TuiHint],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './hint-nested.component.html',
    styleUrl: './hint-nested.component.scss'
})
export class HintNestedComponent {

}
