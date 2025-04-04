import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiSkeleton, TuiSwitch } from '@taiga-ui/kit';

@Component({
  selector: 'app-skeleton-text',
  imports: [FormsModule, TuiSkeleton, TuiSwitch],
  templateUrl: './skeleton-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonTextComponent {
  skeleton = true;
}
