import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiIcon, TuiTitle } from '@taiga-ui/core';
import {
  TuiAvatar,
  TuiBadge,
  TuiBadgedContent,
  TuiSwitch,
} from '@taiga-ui/kit';
import { TuiCell } from '@taiga-ui/layout';

@Component({
  selector: 'app-label',
  imports: [
    FormsModule,
    TuiAvatar,
    TuiBadge,
    TuiBadgedContent,
    TuiCell,
    TuiIcon,
    TuiSwitch,
    TuiTitle,
  ],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent {
  protected incoming = false;
  protected outgoing = true;
}
