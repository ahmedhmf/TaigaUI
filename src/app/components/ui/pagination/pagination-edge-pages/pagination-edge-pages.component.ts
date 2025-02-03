import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiPagination } from '@taiga-ui/kit';
import {
  TuiInputSliderModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
  selector: 'app-pagination-edge-pages',
  templateUrl: './pagination-edge-pages.component.html',
  styleUrl: './pagination-edge-pages.component.scss',
  imports: [
    FormsModule,
    TuiInputSliderModule,
    TuiPagination,
    TuiTextfieldControllerModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationEdgePagesComponent {
  protected sidePadding = 3;
}
