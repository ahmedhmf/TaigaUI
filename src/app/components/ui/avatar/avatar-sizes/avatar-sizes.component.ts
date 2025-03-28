import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAvatar } from '@taiga-ui/kit';

@Component({
  selector: 'app-avatar-sizes',
  imports: [TuiAvatar, UpperCasePipe],
  templateUrl: './avatar-sizes.component.html',
  styleUrl: './avatar-sizes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarSizesComponent {
  protected readonly sizes = ['m', 's', 'xs'] as const;
  protected readonly names = [
    'Jason Statham',
    'Silvester Stallone',
    'Jackie Chan',
  ];
}
