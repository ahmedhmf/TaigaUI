
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiLet } from '@taiga-ui/cdk';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-table-columns-dynamic',
  imports: [TuiButton, TuiLet, TuiTable],

  templateUrl: './table-columns-dynamic.component.html',
  styleUrl: './table-columns-dynamic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableColumnsDynamicComponent {
  protected data: Array<Record<string, number | string>> = [
    { id: 1, name: 'name' },
  ];

  protected get columns(): string[] {
    return Object.keys(this.data[0] ?? {});
  }

  protected addColumn(): void {
    this.data = this.data.map((item) => ({
      ...item,
      [`extra-${this.columns.length + 1}`]: `extra column ${
        this.columns.length + 1
      }`,
    }));
  }

  protected addRows(): void {
    this.data = [...this.data, { ...this.data[0], id: this.data.length + 1 }];
  }
}
