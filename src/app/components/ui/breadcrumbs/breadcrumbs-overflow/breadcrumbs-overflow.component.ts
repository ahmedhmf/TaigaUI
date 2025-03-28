import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiItem } from '@taiga-ui/cdk';
import { TuiHint, TuiLink, TuiTitle } from '@taiga-ui/core';
import { TuiBreadcrumbs, TuiFade } from '@taiga-ui/kit';

@Component({
  selector: 'app-breadcrumbs-overflow',
  imports: [TuiBreadcrumbs, TuiHint, TuiItem, TuiLink, TuiTitle],
  templateUrl: './breadcrumbs-overflow.component.html',
  styleUrl: './breadcrumbs-overflow.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsOverflowComponent {
  protected readonly fade = 'fade';
  protected readonly items = [
    'First item',
    'Very very long second item that must overflow',
    'Third item',
    'One last super long item that is never gonna fit',
  ];
}
