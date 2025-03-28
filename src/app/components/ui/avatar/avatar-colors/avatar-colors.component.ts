import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAutoColorPipe } from '@taiga-ui/core';
import { TuiAvatar, TuiFade } from '@taiga-ui/kit';

@Component({
  selector: 'app-avatar-colors',
  imports: [TuiAutoColorPipe, TuiAvatar, TuiFade],
  templateUrl: './avatar-colors.component.html',
  styleUrl: './avatar-colors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarColorsComponent {}
