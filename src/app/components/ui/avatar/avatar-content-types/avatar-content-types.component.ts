import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiFallbackSrcPipe, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';

@Component({
  selector: 'app-avatar-content-types',
  imports: [AsyncPipe, TuiAvatar, TuiFallbackSrcPipe, TuiTitle],
  templateUrl: './avatar-content-types.component.html',
  styleUrl: './avatar-content-types.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarContentTypesComponent {}
