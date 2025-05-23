import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiScrollbar } from '@taiga-ui/core';

@Component({
  selector: 'app-scrollbar-light',
  imports: [TuiScrollbar],
  templateUrl: './scrollbar-light.component.html',
  styleUrl: './scrollbar-light.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollbarLightComponent {}
