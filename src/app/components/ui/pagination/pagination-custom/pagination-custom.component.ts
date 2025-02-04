import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiPagination } from '@taiga-ui/kit';

@Component({
  selector: 'app-pagination-custom',
  templateUrl: './pagination-custom.component.html',
  styleUrl: './pagination-custom.component.scss',
  imports: [TuiPagination],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationCustomComponent {
  protected readonly days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
}
