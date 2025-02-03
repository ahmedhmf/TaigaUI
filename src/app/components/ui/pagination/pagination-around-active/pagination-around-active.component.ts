import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiPagination } from '@taiga-ui/kit';
import {
  TuiInputSliderModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
  selector: 'app-pagination-around-active',
  templateUrl: './pagination-around-active.component.html',
  styleUrl: './pagination-around-active.component.scss',
  imports: [
    FormsModule,
    TuiInputSliderModule,
    TuiPagination,
    TuiTextfieldControllerModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationAroundActiveComponent {
  protected activePadding = 2;
}
