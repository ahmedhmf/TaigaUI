import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  TuiAppearance,
  TuiNotification,
  TuiTextfield,
  TuiTitle,
} from '@taiga-ui/core';
import {
  TuiAvatar,
  TuiChevron,
  TuiDataListWrapper,
  TuiSelect,
} from '@taiga-ui/kit';
import { TuiCardLarge, TuiCell } from '@taiga-ui/layout';

@Component({
  selector: 'app-combination',
  imports: [
    FormsModule,
    TuiAppearance,
    TuiAvatar,
    TuiCardLarge,
    TuiCell,
    TuiChevron,
    TuiDataListWrapper,
    TuiNotification,
    TuiSelect,
    TuiTextfield,
    TuiTitle,
  ],
  templateUrl: './combination.component.html',
  styleUrl: './combination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CombinationComponent {
  protected readonly items = [
    {
      icon: '@tui.eye',
      title: 'Show more',
      subtitle: 'Ctrl + Shift + M',
    },
    {
      icon: '@tui.mail',
      title: 'Send message',
      subtitle: 'Keep it short',
    },
    {
      icon: '@tui.lock',
      title: 'Access',
      subtitle: 'Block your account',
    },
  ];

  protected value = this.items[0]!;
}
