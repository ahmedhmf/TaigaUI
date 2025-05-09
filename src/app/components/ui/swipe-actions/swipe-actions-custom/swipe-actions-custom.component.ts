import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiSwipeActions } from '@taiga-ui/addon-mobile';
import { TuiButton, TuiSurface, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar, TuiSwitch } from '@taiga-ui/kit';

@Component({
  selector: 'app-swipe-actions-custom',
  imports: [
    FormsModule,
    TuiAvatar,
    TuiButton,
    TuiSurface,
    TuiSwipeActions,
    TuiSwitch,
    TuiTitle,
  ],
  templateUrl: './swipe-actions-custom.component.html',
  styleUrl: './swipe-actions-custom.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwipeActionsCustomComponent {
  protected checkbox = false;
}
