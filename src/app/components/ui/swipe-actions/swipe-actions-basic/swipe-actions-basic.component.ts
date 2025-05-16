import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAmountPipe } from '@taiga-ui/addon-commerce';
import { TuiSwipeActions } from '@taiga-ui/addon-mobile';
import { TuiAppearance, TuiButton, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCell } from '@taiga-ui/layout';

@Component({
  selector: 'app-swipe-actions-basic',
  imports: [
    AsyncPipe,
    TuiAmountPipe,
    TuiAppearance,
    TuiAvatar,
    TuiButton,
    TuiCardLarge,
    TuiCell,
    TuiSwipeActions,
    TuiTitle,
  ],
  templateUrl: './swipe-actions-basic.component.html',
  styleUrl: './swipe-actions-basic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwipeActionsBasicComponent {}
