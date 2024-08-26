import { Component } from '@angular/core';
import { TuiAutoColorPipe } from '@taiga-ui/core';
import { TuiAvatar, TuiFade } from '@taiga-ui/kit';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [TuiAvatar, TuiAutoColorPipe, TuiFade],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css',
})
export class AvatarComponent {}
