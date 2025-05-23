import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiScrollbar, tuiScrollbarOptionsProvider } from '@taiga-ui/core';

@Component({
  selector: 'app-scrollbar-hover',
  imports: [TuiScrollbar],
  templateUrl: './scrollbar-hover.component.html',
  styleUrl: './scrollbar-hover.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiScrollbarOptionsProvider({
      mode: 'hover',
    }),
  ],
})
export class ScrollbarHoverComponent {}
