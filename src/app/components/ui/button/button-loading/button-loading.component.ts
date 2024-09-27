import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TuiButton } from '@taiga-ui/core';
import { TuiButtonLoading } from '@taiga-ui/kit';
import { map, startWith, Subject, switchMap, timer } from 'rxjs';
import { TUI_FALSE_HANDLER } from '@taiga-ui/cdk';

@Component({
  selector: 'app-button-loading',
  standalone: true,
  imports: [AsyncPipe, TuiButton, TuiButtonLoading],
  templateUrl: './button-loading.component.html',
  styleUrl: './button-loading.component.scss',
})
export class ButtonLoadingComponent {
  protected readonly trigger$ = new Subject<void>();
  protected readonly loading$ = this.trigger$.pipe(
    switchMap(() =>
      timer(2000).pipe(map(TUI_FALSE_HANDLER), startWith('Loading'))
    )
  );
}
