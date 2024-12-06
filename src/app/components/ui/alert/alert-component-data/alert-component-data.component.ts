import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import type { TuiPopover } from '@taiga-ui/cdk';
import type { TuiAlertOptions } from '@taiga-ui/core';
import { TuiAlertService, TuiButton, TuiLink } from '@taiga-ui/core';
import { injectContext, PolymorpheusComponent } from '@taiga-ui/polymorpheus';
import { switchMap, takeUntil } from 'rxjs';

@Component({
  standalone: true,
  exportAs: 'Example4',
  imports: [CurrencyPipe, TuiButton, TuiLink],
  template: `
    <span tuiSubtitle>
      <em>Your balance:</em>
      {{ value | currency: 'RUB' }}
    </span>
    <div>
      <button tuiButton type="button" (click)="context.completeWith(value)">
        Submit
      </button>
      <button tuiLink type="button" (click)="increaseBalance()">
        Increase
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertExampleWithData {
  protected readonly context =
    injectContext<TuiPopover<TuiAlertOptions<number>, number>>();

  protected value = this.context.data;

  protected increaseBalance(): void {
    this.value += 10;
  }
}

@Component({
  selector: 'app-alert-component-data',
  standalone: true,
  imports: [TuiButton],
  templateUrl: './alert-component-data.component.html',
  styleUrl: './alert-component-data.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponentDataComponent {
  private readonly alerts = inject(TuiAlertService);
  private readonly notification = this.alerts
    .open<number>(new PolymorpheusComponent(AlertExampleWithData), {
      label: 'Heading is so long that it should be shown in two lines of text',
      data: 237,
      appearance: 'warning',
      autoClose: 0,
    })
    .pipe(
      switchMap((response) =>
        this.alerts.open(`Got a value — ${response}`, { label: 'Information' })
      ),
      takeUntil(inject(Router).events)
    );

  protected showNotification(): void {
    this.notification.subscribe();
  }
}
