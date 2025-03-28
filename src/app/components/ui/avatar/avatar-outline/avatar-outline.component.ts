import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAvatar, TuiAvatarOutline } from '@taiga-ui/kit';

@Component({
  selector: 'app-avatar-outline',
  imports: [TuiAvatar, TuiAvatarOutline],
  templateUrl: './avatar-outline.component.html',
  styleUrl: './avatar-outline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarOutlineComponent {}
