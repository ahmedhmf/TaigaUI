import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton, TuiLoader, tuiLoaderOptionsProvider } from '@taiga-ui/core';

@Component({
  selector: 'app-loader-options',
  imports: [TuiLoader, TuiButton],
  templateUrl: './loader-options.component.html',
  styleUrl: './loader-options.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiLoaderOptionsProvider({
      size: 'l',
      inheritColor: false,
      overlay: true,
    }),
  ],
})
export class LoaderOptionsComponent {}
