import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TuiTabBar } from '@taiga-ui/addon-mobile';

@Component({
  selector: 'app-tabbar-links',
  imports: [RouterLink, RouterLinkActive, TuiTabBar],
  templateUrl: './tabbar-links.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabbarLinksComponent {
  protected readonly routes: any = {};
}
