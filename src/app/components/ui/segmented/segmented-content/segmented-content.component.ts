import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IsActiveMatchOptions } from '@angular/router';
import { TuiIcon } from '@taiga-ui/core';
import { TuiSegmented } from '@taiga-ui/kit';

@Component({
  selector: 'app-segmented-content',
  imports: [FormsModule, TuiIcon, TuiSegmented],
  templateUrl: './segmented-content.component.html',
  styleUrl: './segmented-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SegmentedContentComponent {
  protected selected = 'a';

  protected readonly options: IsActiveMatchOptions = {
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'exact',
  };

  protected readonly routes: any = {};
}
