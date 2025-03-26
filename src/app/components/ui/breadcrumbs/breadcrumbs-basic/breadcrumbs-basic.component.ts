import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiItem } from '@taiga-ui/cdk';
import { TuiLink } from '@taiga-ui/core';
import { TuiBreadcrumbs } from '@taiga-ui/kit';

@Component({
  selector: 'app-breadcrumbs-basic',
  imports: [RouterLink, TuiBreadcrumbs, TuiItem, TuiLink],
  templateUrl: './breadcrumbs-basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsBasicComponent {
  protected items = [
    {
      caption: 'Selects',
      routerLink: '/components/select',
    },
    {
      caption: 'Multi',
      routerLink: '/components/multi-select',
    },
    {
      caption: 'With tags',
      routerLink: '/components/multi-select',
    },
    {
      caption: 'Current',
      routerLink: '/navigation/breadcrumbs',
      routerLinkActiveOptions: { exact: true },
    },
  ];
}
