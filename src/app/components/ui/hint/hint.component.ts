import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAutoColorPipe, TuiHint } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';

@Component({
  selector: 'app-hint',
  imports: [TuiAutoColorPipe, TuiAvatar, TuiHint],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hint.component.html',
  styleUrl: './hint.component.scss',
})
export class HintComponent {}
