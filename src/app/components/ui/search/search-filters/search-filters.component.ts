import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { EMPTY_QUERY } from '@taiga-ui/cdk';
import { TuiButton, TuiTextfield } from '@taiga-ui/core';
import { TuiItemsWithMore } from '@taiga-ui/kit';
import { TuiSearch } from '@taiga-ui/layout';

@Component({
  selector: 'app-search-filters',
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    TuiButton,
    TuiItemsWithMore,
    TuiSearch,
    TuiTextfield
],
  templateUrl: './search-filters.component.html',
  styleUrl: './search-filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFiltersComponent {
  protected readonly filters = new FormArray(
    Array.from({ length: 5 }, () => new FormControl())
  );

  protected readonly form = new FormGroup({ filters: this.filters });
  protected readonly controls = EMPTY_QUERY;
}
