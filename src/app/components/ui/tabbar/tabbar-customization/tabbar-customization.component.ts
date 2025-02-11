import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiTabBar } from '@taiga-ui/addon-mobile';

@Component({
  selector: 'app-tabbar-customization',
  imports: [TuiTabBar],
  templateUrl: './tabbar-customization.component.html',
  styleUrl: './tabbar-customization.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabbarCustomizationComponent {
  protected readonly items = [
    {
      text: 'Home',
      icon: '@tui.home',
    },
    {
      text: 'Photos',
      icon: '@tui.image',
    },
    {
      text: 'Navigation',
      icon: '@tui.map-pin',
    },
  ];
}
