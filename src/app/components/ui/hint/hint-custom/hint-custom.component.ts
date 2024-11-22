import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAutoColorPipe, TuiHint } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';

@Component({
  selector: 'app-hint-custom',
  standalone: true,
  imports: [TuiAutoColorPipe, TuiAvatar, TuiHint],
  templateUrl: './hint-custom.component.html',
  styleUrl: './hint-custom.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HintCustomComponent {

}
