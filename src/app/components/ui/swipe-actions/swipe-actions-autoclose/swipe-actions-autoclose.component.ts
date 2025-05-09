import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAmountPipe } from '@taiga-ui/addon-commerce';
import {
  TuiSwipeActions,
  TuiSwipeActionsAutoClose,
} from '@taiga-ui/addon-mobile';
import { TuiAppearance, TuiButton, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCell } from '@taiga-ui/layout';

@Component({
  selector: 'app-swipe-actions-autoclose',
  imports: [
    AsyncPipe,
    TuiAmountPipe,
    TuiAppearance,
    TuiAvatar,
    TuiButton,
    TuiCardLarge,
    TuiCell,
    TuiSwipeActions,
    TuiSwipeActionsAutoClose,
    TuiTitle,
  ],
  templateUrl: './swipe-actions-autoclose.component.html',
  styleUrl: './swipe-actions-autoclose.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwipeActionsAutocloseComponent {}
