import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiAvatar, TuiSkeleton, TuiSwitch } from '@taiga-ui/kit';

@Component({
  selector: 'app-skeleton-components',
  imports: [TuiAvatar, FormsModule, TuiSkeleton, TuiSwitch],
  templateUrl: './skeleton-components.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonComponentsComponent {
  skeleton = true;
}
