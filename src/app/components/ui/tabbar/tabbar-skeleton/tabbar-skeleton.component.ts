import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiTabBar } from '@taiga-ui/addon-mobile';
import { TuiButton } from '@taiga-ui/core';
import { map, startWith, Subject, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-tabbar-skeleton',
  imports: [AsyncPipe, TuiButton, TuiTabBar],
  templateUrl: './tabbar-skeleton.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabbarSkeletonComponent {
  protected readonly load$ = new Subject<void>();

  protected readonly items$ = this.load$.pipe(
    startWith(null),
    switchMap(() =>
      timer(3000).pipe(
        map(() => [
          {
            text: 'Favorites',
            icon: '@tui.heart',
          },
          {
            text: 'Calls',
            icon: '@tui.phone',
          },
          {
            text: 'Profile',
            icon: '@tui.user',
          },
          {
            text: 'Settings and configuration',
            icon: '@tui.settings',
          },
        ]),
        startWith([])
      )
    )
  );
}
