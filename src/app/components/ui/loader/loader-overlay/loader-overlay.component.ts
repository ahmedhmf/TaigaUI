import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiLoader } from '@taiga-ui/core';

@Component({
    selector: 'app-loader-overlay',
    imports: [TuiLoader],
    templateUrl: './loader-overlay.component.html',
    styleUrl: './loader-overlay.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderOverlayComponent {

}
