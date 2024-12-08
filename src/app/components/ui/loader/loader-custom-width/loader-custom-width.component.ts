import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiLoader, tuiLoaderOptionsProvider } from '@taiga-ui/core';

@Component({
  selector: 'app-loader-custom-width',
  imports: [TuiLoader],
  templateUrl: './loader-custom-width.component.html',
  styleUrl: './loader-custom-width.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [tuiLoaderOptionsProvider({ size: 'xl' })],
})
export class LoaderCustomWidthComponent {}
