import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiAlertService, TuiTextfield } from '@taiga-ui/core';
import { TuiInputNumber, TuiTabs } from '@taiga-ui/kit';

@Component({
  selector: 'app-tabs-with-more',
  imports: [FormsModule, TuiInputNumber, TuiTabs, TuiTextfield],
  templateUrl: './tabs-with-more.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsWithMoreComponent {
  private readonly alerts = inject(TuiAlertService);

  protected activeItemIndex = 0;

  protected onClick(item: string): void {
    this.alerts.open(item).subscribe();
  }
}
