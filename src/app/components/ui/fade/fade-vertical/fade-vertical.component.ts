import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiScrollable, TuiScrollbar } from '@taiga-ui/core';
import { TuiFade } from '@taiga-ui/kit';

@Component({
  selector: 'app-fade-vertical',
  imports: [TuiFade, TuiScrollable, TuiScrollbar],
  templateUrl: './fade-vertical.component.html',
  styleUrl: './fade-vertical.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FadeVerticalComponent {}
