import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiTabs } from '@taiga-ui/kit';

@Component({
  selector: 'app-tabs-vertical',
  imports: [TuiTabs],
  templateUrl: './tabs-vertical.component.html',
  styleUrl: './tabs-vertical.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsVerticalComponent {}
