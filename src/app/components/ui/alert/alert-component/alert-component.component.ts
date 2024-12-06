import {NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import type {TuiPopover} from '@taiga-ui/cdk';
import type {TuiAlertOptions} from '@taiga-ui/core';
import {TuiAlertService, TuiButton} from '@taiga-ui/core';
import {injectContext, PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {switchMap, takeUntil} from 'rxjs';

@Component({
  standalone: true,
  exportAs: "Example3",
  imports: [NgForOf, TuiButton],
  template: `
      <p>Yes?</p>
      <button
          *ngFor="let response of [true, false]"
          appearance="outline-grayscale"
          size="s"
          tuiButton
          type="button"
          class="tui-space_right-1"
          (click)="context.completeWith(response)"
      >
          {{ response ? 'Yes' : 'No' }}
      </button>
  `,
  styles: [
    `
    .tui-space_right-1{
      margin-right: .25rem;
    }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})	export class AlertExample {
  protected readonly context = injectContext<TuiPopover<TuiAlertOptions<void>, boolean>>();
}

@Component({
  selector: 'app-alert-component',
  imports: [TuiButton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './alert-component.component.html',
  styleUrl: './alert-component.component.scss'
})
export class AlertComponentComponent {
  private readonly alerts = inject(TuiAlertService);

  private readonly notification = this.alerts
        .open<boolean>(new PolymorpheusComponent(AlertExample), {
            label: 'Question',
            appearance: 'negative',
            autoClose: 0,
        })
        .pipe(
            switchMap((response) =>
                this.alerts.open(`Got a value — ${response}`, {label: 'Information'}),
            ),
            takeUntil(inject(Router).events),
        );
 
    protected showNotification(): void {
        this.notification.subscribe();
    }
}
