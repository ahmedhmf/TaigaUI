import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TuiTable } from '@taiga-ui/addon-table';
import type { TuiContext, TuiStringHandler } from '@taiga-ui/cdk';
import { TuiButton, TuiFormatNumberPipe, TuiTextfield } from '@taiga-ui/core';
import {
  TuiButtonSelect,
  TuiDataListWrapper,
  TuiPagination,
} from '@taiga-ui/kit';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-table-footer',
  imports: [
    AsyncPipe,
    FormsModule,
    TuiButton,
    TuiButtonSelect,
    TuiDataListWrapper,
    TuiFormatNumberPipe,
    TuiPagination,
    TuiTable,
    TuiTextfield
],
  templateUrl: './table-footer.component.html',
  styleUrl: './table-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableFooterComponent {
  protected readonly data = [
    {
      name: 'Alex Inkin',
      balance: 1323525,
    },
    {
      name: 'Roman Sedov',
      balance: 423242,
    },
  ] as const;

  protected index = 4;
  protected length = 10;
  protected size = 10;
  protected readonly items = [10, 50, 100];
  protected readonly content: TuiStringHandler<TuiContext<number>> = ({
    $implicit,
  }) => `${$implicit} items per page`;
}
