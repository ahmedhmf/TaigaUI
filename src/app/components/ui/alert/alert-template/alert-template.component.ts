import { CurrencyPipe } from '@angular/common';
import type { TemplateRef } from '@angular/core';
import { ChangeDetectionStrategy, Component, inject, ViewChild } from '@angular/core';
import type { TuiAlertContext } from '@taiga-ui/core';
import { TuiAlertService, TuiButton } from '@taiga-ui/core';
import { PolymorpheusTemplate } from '@taiga-ui/polymorpheus';

@Component({
  selector: 'app-alert-template',
  imports: [
    PolymorpheusTemplate,
    TuiButton,
    CurrencyPipe
],
changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './alert-template.component.html',
  styleUrl: './alert-template.component.scss'
})
export class AlertTemplateComponent {
  private readonly alerts = inject(TuiAlertService);
 
  @ViewChild('withdrawTemplate')
  protected withdrawTemplate?: TemplateRef<TuiAlertContext>;

  @ViewChild('depositTemplate')
  protected depositTemplate?: TemplateRef<TuiAlertContext>;

  protected money = 1000;

  protected showWithdrawAlert(): void {
      this.alerts
          .open(this.withdrawTemplate || '', {
              label: 'A template sample',
              appearance: 'warning',
              autoClose: 0,
          })
          .subscribe();
  }

  protected showDepositAlert(): void {
      this.alerts
          .open(this.depositTemplate || '', {
              label: 'A template sample',
              appearance: 'positive',
              autoClose: 0,
          })
          .subscribe();
  }

  protected withdraw(): void {
      this.money -= 100;
  }

  protected deposit(): void {
      this.money += 100;
  }
}
