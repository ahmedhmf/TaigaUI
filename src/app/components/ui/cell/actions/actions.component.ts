import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton, TuiDropdown, TuiGroup, TuiTitle } from '@taiga-ui/core';
import { TuiDataListWrapper } from '@taiga-ui/kit';
import { TuiCell } from '@taiga-ui/layout';

@Component({
  selector: 'app-actions',
  imports: [
    TuiButton,
    TuiCell,
    TuiDataListWrapper,
    TuiDropdown,
    TuiGroup,
    TuiTitle,
  ],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsComponent {
  protected readonly items = [
    {
      icon: '@tui.phone',
      toString: () => 'Call now',
    },
    {
      icon: '@tui.star',
      toString: () => 'Add to favorites',
    },
    {
      icon: '@tui.trash',
      toString: () => 'Remove item',
    },
  ];
}
