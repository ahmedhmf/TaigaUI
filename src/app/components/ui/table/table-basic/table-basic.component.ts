import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiFormatNumberPipe } from '@taiga-ui/core';

@Component({
  selector: 'app-table-basic',
  imports: [AsyncPipe, TuiFormatNumberPipe, TuiTable],
  templateUrl: './table-basic.component.html',
  styleUrl: './table-basic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableBasicComponent {
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

  protected readonly columns = Object.keys(this.data[0]);
}
