import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiFallbackSrcPipe } from '@taiga-ui/core';
import { TuiAvatar, TuiAvatarLabeled } from '@taiga-ui/kit';

@Component({
  selector: 'app-avatar-labeled',
  imports: [AsyncPipe, TuiAvatar, TuiAvatarLabeled, TuiFallbackSrcPipe],
  templateUrl: './avatar-labeled.component.html',
  styleUrl: './avatar-labeled.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarLabeledComponent {}
