import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiTitle } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiCell } from '@taiga-ui/layout';

@Component({
  selector: 'app-basic',
  imports: [TuiAvatar, TuiCell, TuiTitle],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicComponent {
  protected readonly sizes = ['s', 'm', 'l'] as const;
}
