import { AsyncPipe, PercentPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TUI_FALSE_HANDLER, tuiClamp } from '@taiga-ui/cdk';
import { TuiButton, TuiHint } from '@taiga-ui/core';
import { TuiSlider } from '@taiga-ui/kit';
import {
  BehaviorSubject,
  distinctUntilChanged,
  switchMap,
  of,
  timer,
  map,
} from 'rxjs';

@Component({
  selector: 'app-slider-complex',
  imports: [AsyncPipe, FormsModule, PercentPipe, TuiButton, TuiHint, TuiSlider],
  templateUrl: './slider-complex.component.html',
  styleUrl: './slider-complex.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComplexComponent {
  protected min = 0.5;
  protected max = 2;
  protected value = 1;

  protected readonly active$ = new BehaviorSubject(false);
  protected readonly showHint$ = this.active$.pipe(
    distinctUntilChanged(),
    switchMap((active) =>
      active ? of(true) : timer(1000).pipe(map(TUI_FALSE_HANDLER))
    )
  );

  protected onKeydown(show: boolean): void {
    this.active$.next(show);
  }

  protected change(step: number): void {
    this.value = tuiClamp(this.value + step, this.min, this.max);
  }
}
