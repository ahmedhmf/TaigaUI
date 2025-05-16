import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAmountPipe } from '@taiga-ui/addon-commerce';
import { TuiSwipeActions } from '@taiga-ui/addon-mobile';
import {
  TuiAppearance,
  TuiButton,
  TuiDataList,
  TuiDropdown,
  TuiTitle,
} from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCell } from '@taiga-ui/layout';

@Component({
  selector: 'app-swipe-actions-desktop-fallback',
  imports: [
    AsyncPipe,
    TuiAmountPipe,
    TuiAppearance,
    TuiAvatar,
    TuiButton,
    TuiCardLarge,
    TuiCell,
    TuiDataList,
    TuiDropdown,
    TuiSwipeActions,
    TuiTitle,
  ],
  templateUrl: './swipe-actions-desktop-fallback.component.html',
  styleUrl: './swipe-actions-desktop-fallback.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwipeActionsDesktopFallbackComponent {}
