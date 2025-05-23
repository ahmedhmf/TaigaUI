import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TUI_DEFAULT_MATCHER, TuiLet } from '@taiga-ui/cdk';
import { TuiInitialsPipe } from '@taiga-ui/core';
import { TuiAvatar, TuiDataListWrapper } from '@taiga-ui/kit';
import {
  TuiComboBoxModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import type { Observable } from 'rxjs';
import { delay, filter, of, startWith, Subject, switchMap } from 'rxjs';

class User {
  constructor(
    protected readonly firstName: string,
    protected readonly lastName: string,
    protected readonly avatarUrl: string | null = null
  ) {}

  protected toString(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const databaseMockData: readonly User[] = [
  new User(
    'Roman',
    'Sedov',
    'https://avatars.githubusercontent.com/u/10106368'
  ),
  new User('Alex', 'Inkin', `https://taiga-ui.dev/assets/images/avatar.jpg`),
];

@Component({
  selector: 'app-combobox-async',
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    TuiAvatar,
    TuiComboBoxModule,
    TuiDataListWrapper,
    TuiInitialsPipe,
    TuiLet,
    TuiTextfieldControllerModule,
  ],

  templateUrl: './combobox-async.component.html',
  styleUrl: './combobox-async.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboboxAsyncComponent {
  protected readonly search$ = new Subject<string | null>();

  protected readonly items$: Observable<readonly User[] | null> =
    this.search$.pipe(
      filter((value) => value !== null),
      switchMap((search) =>
        this.serverRequest(search).pipe(startWith<readonly User[] | null>(null))
      ),
      startWith(databaseMockData)
    );

  protected readonly testValue = new FormControl(databaseMockData[1]);

  protected onSearchChange(searchQuery: string | null): void {
    this.search$.next(searchQuery);
  }

  protected extractValueFromEvent(event: Event): string | null {
    return (event.target as HTMLInputElement)?.value || null;
  }

  /**
   * Service request emulation
   */
  private serverRequest(
    searchQuery: string | null
  ): Observable<readonly User[]> {
    const result = databaseMockData.filter((user) =>
      TUI_DEFAULT_MATCHER(user, searchQuery || '')
    );

    return of(result).pipe(delay(Math.random() * 1000 + 500));
  }
}
