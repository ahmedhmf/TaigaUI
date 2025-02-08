import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiTabBar } from '@taiga-ui/addon-mobile';
import { TuiAlertService, TuiButton } from '@taiga-ui/core';

interface Item {
  badge?: number;
  icon: string;
  text: string;
}
@Component({
  selector: 'app-tabbar-buttons',
  imports: [TuiTabBar, TuiButton],
  templateUrl: './tabbar-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabbarButtonsComponent {
  private readonly alerts = inject(TuiAlertService);

  protected activeItemIndex = 1;

  protected readonly items = [
    {
      text: 'Favorites',
      icon: '@tui.heart',
      badge: 3,
    },
    {
      text: 'Calls',
      icon: '@tui.phone',
      badge: 1234,
    },
    {
      text: 'Profile',
      icon: '@tui.user',
    },
    {
      text: 'Settings and configuration',
      icon: '@tui.settings',
      badge: 100,
    },
    {
      text: 'More',
      icon: '@tui.ellipsis',
    },
  ];

  protected onClick(item: Item): void {
    item.badge = 0;
    this.alerts.open(this.activeItemIndex, { label: item.text }).subscribe();
  }
}
