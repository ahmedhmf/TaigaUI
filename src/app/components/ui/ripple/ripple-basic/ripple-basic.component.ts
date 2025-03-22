import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiRipple } from '@taiga-ui/addon-mobile';

@Component({
  selector: 'app-ripple-basic',
  imports: [TuiRipple],
  templateUrl: './ripple-basic.component.html',
  styleUrl: './ripple-basic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RippleBasicComponent {}
