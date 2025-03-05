import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiTabs } from '@taiga-ui/kit';

@Component({
  selector: 'app-tabs-styles',
  imports: [TuiTabs],
  templateUrl: './tabs-styles.component.html',
  styleUrl: './tabs-styles.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsStylesComponent {
  protected activeItemIndex = 0;
}
