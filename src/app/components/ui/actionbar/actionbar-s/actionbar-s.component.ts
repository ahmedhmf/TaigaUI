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
  selector: 'app-actionbar-s',
  imports: [TuiActionBar, TuiButton],
  templateUrl: './actionbar-s.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionbarSComponent {
  protected open = signal(false);

  protected readonly isMobile = toSignal(
    inject(TuiBreakpointService).pipe(map((size) => size === 'mobile'))
  );
}
