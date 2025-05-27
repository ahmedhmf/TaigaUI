import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiScrollbar } from '@taiga-ui/core';

@Component({
  selector: 'app-scrollbar-horizontal',
  imports: [TuiScrollbar],
  templateUrl: './scrollbar-horizontal.component.html',
  styleUrl: './scrollbar-horizontal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollbarHorizontalComponent {}
