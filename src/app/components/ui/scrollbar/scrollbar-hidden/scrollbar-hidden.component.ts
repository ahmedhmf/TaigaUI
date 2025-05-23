import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiScrollbar } from '@taiga-ui/core';

@Component({
  selector: 'app-scrollbar-hidden',
  imports: [TuiScrollbar],
  templateUrl: './scrollbar-hidden.component.html',
  styleUrl: './scrollbar-hidden.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollbarHiddenComponent {}
