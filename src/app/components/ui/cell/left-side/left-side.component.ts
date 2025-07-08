import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiThumbnailCard } from '@taiga-ui/addon-commerce';
import { TuiIcon, TuiLink, TuiTitle } from '@taiga-ui/core';
import {
  TuiAvatar,
  TuiAvatarStack,
  TuiBadge,
  TuiCheckbox,
  TuiProgress,
} from '@taiga-ui/kit';
import { TuiCell } from '@taiga-ui/layout';

@Component({
  selector: 'app-left-side',
  imports: [
    FormsModule,
    TuiAvatar,
    TuiAvatarStack,
    TuiBadge,
    TuiCell,
    TuiCheckbox,
    TuiIcon,
    TuiLink,
    TuiProgress,
    TuiThumbnailCard,
    TuiTitle,
  ],
  templateUrl: './left-side.component.html',
  styleUrl: './left-side.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftSideComponent {
  protected value = false;
}
