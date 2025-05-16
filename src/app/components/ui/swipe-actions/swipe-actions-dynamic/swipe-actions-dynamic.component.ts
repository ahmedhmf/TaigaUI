import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiAmountPipe } from '@taiga-ui/addon-commerce';
import { TuiSwipeActions } from '@taiga-ui/addon-mobile';
import { TuiAppearance, TuiButton, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar, TuiCheckbox } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCell } from '@taiga-ui/layout';

@Component({
  selector: 'app-swipe-actions-dynamic',
  imports: [
    AsyncPipe,
    FormsModule,
    NgIf,
    TuiAmountPipe,
    TuiAppearance,
    TuiAvatar,
    TuiButton,
    TuiCardLarge,
    TuiCell,
    TuiCheckbox,
    TuiSwipeActions,
    TuiTitle,
  ],
  templateUrl: './swipe-actions-dynamic.component.html',
  styleUrl: './swipe-actions-dynamic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwipeActionsDynamicComponent {
  protected shareButton = false;
  protected editButton = true;
}
