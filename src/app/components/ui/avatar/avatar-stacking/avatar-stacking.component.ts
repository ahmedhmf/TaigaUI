import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  TuiAutoColorPipe,
  TuiInitialsPipe,
  TuiSizeXS,
  TuiSizeXXL,
} from '@taiga-ui/core';
import { TuiAvatar, TuiAvatarStack } from '@taiga-ui/kit';

@Component({
  selector: 'app-avatar-stacking',
  imports: [TuiAutoColorPipe, TuiAvatar, TuiAvatarStack, TuiInitialsPipe],
  templateUrl: './avatar-stacking.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarStackingComponent {
  protected readonly names = [
    'Jason Statham',
    'Silvester Stallone',
    'Jackie Chan',
  ];
  protected readonly sizes: ReadonlyArray<TuiSizeXS | TuiSizeXXL> = [
    'm',
    's',
    'xs',
  ];
}
