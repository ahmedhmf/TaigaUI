import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import type { TuiPopover } from '@taiga-ui/cdk';
import { TuiButton, TuiDialogCloseService } from '@taiga-ui/core';
import { injectContext, PolymorpheusOutlet } from '@taiga-ui/polymorpheus';
import type { PromptOptions } from './prompt.interface';

@Component({
  selector: 'app-prompt',
  imports: [PolymorpheusOutlet, TuiButton],
  templateUrl: './prompt.component.html',
  styleUrl: './prompt.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDialogCloseService],
})
export class PromptComponent {
  protected readonly context =
    injectContext<TuiPopover<PromptOptions, boolean>>();

  constructor() {
    inject(TuiDialogCloseService)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.context.$implicit.complete());
  }

  protected onClick(response: boolean): void {
    this.context.completeWith(response);
  }
}
