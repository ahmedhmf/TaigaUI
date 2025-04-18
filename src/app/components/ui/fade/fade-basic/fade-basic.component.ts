import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiScrollable, TuiScrollbar } from '@taiga-ui/core';
import { TuiFade } from '@taiga-ui/kit';

@Component({
  selector: 'app-fade-basic',
  imports: [TuiFade, TuiScrollable, TuiScrollbar],
  templateUrl: './fade-basic.component.html',
  styleUrl: './fade-basic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FadeBasicComponent {}
