import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton, TuiLoader } from '@taiga-ui/core';

@Component({
    selector: 'app-loading-button',
    imports: [TuiLoader, TuiButton],
    templateUrl: './loading-button.component.html',
    styleUrl: './loading-button.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingButtonComponent {}
