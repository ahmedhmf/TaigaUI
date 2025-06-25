import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiDialogCloseService, TuiDialogComponent } from '@taiga-ui/core';
import { PolymorpheusOutlet } from '@taiga-ui/polymorpheus';

@Component({
  standalone: true,
  selector: 'custom-dialog',
  imports: [PolymorpheusOutlet],
  template: `
    <ng-container
      *polymorpheusOutlet="context.content as text; context: context"
    >
      {{ text }}
    </ng-container>
  `,
  styles: `
    :host {
      display: block;
      padding: 1.5rem;
      margin: auto;
      border-radius: 0 0 0.75rem 0.75rem;
      background: var(--tui-background-base);
      box-shadow: inset 0 4px var(--tui-background-accent-2);
      animation:
        tuiReveal var(--tui-duration),
        tuiFadeIn var(--tui-duration);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDialogCloseService],
})
export class TuiCustomDialogComponent<O, I> extends TuiDialogComponent<O, I> {}
