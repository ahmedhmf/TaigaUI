import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiAlertService, TuiButton } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import { switchMap } from 'rxjs';
import { PromptService } from './prompt.service';

@Component({
  selector: 'app-dialog-custom',
  imports: [TuiAvatar, TuiButton],
  templateUrl: './dialog-custom.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogCustomComponent {
  private readonly alerts = inject(TuiAlertService);
  private readonly promptService = inject(PromptService);

  protected onClick(
    choose: PolymorpheusContent,
    poorly: PolymorpheusContent,
    wisely: PolymorpheusContent
  ): void {
    this.promptService
      .open(choose, {
        heading: 'Taiga UI is the best',
        buttons: ['Absolutely!', 'No way!'],
      })
      .pipe(
        switchMap((response) =>
          response
            ? this.alerts.open(wisely, {
                appearance: 'positive',
              })
            : this.alerts.open(poorly, {
                appearance: 'negative',
              })
        )
      )
      .subscribe();
  }
}
