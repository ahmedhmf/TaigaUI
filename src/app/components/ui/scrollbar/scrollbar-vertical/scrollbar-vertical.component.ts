import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiScrollbar } from '@taiga-ui/core';

@Component({
  selector: 'app-scrollbar-vertical',
  imports: [TuiScrollbar],
  templateUrl: './scrollbar-vertical.component.html',
  styleUrl: './scrollbar-vertical.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollbarVerticalComponent {}
