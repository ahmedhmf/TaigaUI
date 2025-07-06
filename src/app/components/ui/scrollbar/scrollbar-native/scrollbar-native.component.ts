import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiScrollbar, tuiScrollbarOptionsProvider } from '@taiga-ui/core';

@Component({
  selector: 'app-scrollbar-native',
  imports: [TuiScrollbar],
  templateUrl: './scrollbar-native.component.html',
  styleUrl: './scrollbar-native.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiScrollbarOptionsProvider({
      mode: 'native',
    }),
  ],
})
export class ScrollbarNativeComponent {}
