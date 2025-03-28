import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAvatar } from '@taiga-ui/kit';

@Component({
  selector: 'app-avatar-di',
  imports: [TuiAvatar],
  templateUrl: './avatar-di.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarDiComponent {}
