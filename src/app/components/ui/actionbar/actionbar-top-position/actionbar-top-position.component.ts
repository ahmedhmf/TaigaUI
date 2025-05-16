import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TuiBreakpointService, TuiButton } from '@taiga-ui/core';
import { TuiActionBar } from '@taiga-ui/kit';
import { map } from 'rxjs';

@Component({
  selector: 'app-actionbar-top-position',
  imports: [TuiActionBar, TuiButton],
  templateUrl: './actionbar-top-position.component.html',
  styleUrl: './actionbar-top-position.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionbarTopPositionComponent {
  protected open = signal(false);

  protected readonly isMobile = toSignal(
    inject(TuiBreakpointService).pipe(map((size) => size === 'mobile'))
  );
}
