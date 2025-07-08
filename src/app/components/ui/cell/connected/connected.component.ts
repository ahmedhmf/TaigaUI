import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  TuiAppearance,
  TuiIcon,
  TuiNotification,
  TuiTitle,
} from '@taiga-ui/core';
import {
  TuiAvatar,
  TuiBadge,
  TuiBadgedContent,
  TuiConnected,
  TuiDataListWrapper,
  TuiSwitch,
} from '@taiga-ui/kit';
import { TuiCardLarge, TuiCell } from '@taiga-ui/layout';
import {
  TuiSelectModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
  selector: 'app-connected',
  imports: [
    FormsModule,
    TuiAppearance,
    TuiAvatar,
    TuiBadge,
    TuiBadgedContent,
    TuiCardLarge,
    TuiCell,
    TuiConnected,
    TuiDataListWrapper,
    TuiIcon,
    TuiNotification,
    TuiSelectModule,
    TuiSwitch,
    TuiTextfieldControllerModule,
    TuiTitle,
  ],
  templateUrl: './connected.component.html',
  styleUrl: './connected.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnectedComponent {
  protected readonly items = [
    {
      icon: '@tui.eye',
      title: 'Show more',
      subtitle: 'Ctrl + Shift + M',
    },
    {
      icon: '@tui.mail',
      title: 'Send message',
      subtitle:
        'Allow outgoing unusual call that can change your life in an unusual way',
    },
    {
      icon: '@tui.lock',
      title: 'Access',
      subtitle: 'Block your account',
    },
  ];

  protected value = this.items[0]!;

  protected incoming = false;
  protected outgoing = true;
}
