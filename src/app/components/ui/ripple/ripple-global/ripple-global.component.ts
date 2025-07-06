import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiRipple } from '@taiga-ui/addon-mobile';
import { TuiButton } from '@taiga-ui/core';
@Component({
  selector: 'app-ripple-global',
  imports: [TuiRipple, TuiButton],
  templateUrl: './ripple-global.component.html',
  styleUrl: './ripple-global.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RippleGlobalComponent {}
