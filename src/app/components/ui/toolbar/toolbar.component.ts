import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  output,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  DashboardService,
  SearchFilter,
} from '../../../services/dashboard.service';
import { ComboBoxComponent } from '../taiga/combo-box/combo-box.component';
import { SearchComponent } from '../taiga/search/search.component';

export interface SearchForm {
  componentId: FormControl<number>;
  searchInput: FormControl<string>;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ComboBoxComponent, SearchComponent],
})
export class ToolbarComponent implements AfterViewInit {
  protected readonly dashboardService = inject(DashboardService);
  readonly #formBuilder = inject(FormBuilder);
  onChange = output<SearchFilter>();

  searchForm = this.#formBuilder.group<SearchForm>({
    componentId: new FormControl(-1, {
      nonNullable: true,
    }),
    searchInput: new FormControl('', {
      nonNullable: true,
    }),
  });

  ngAfterViewInit(): void {
    this.searchForm
      .get('componentId')
      ?.valueChanges.subscribe((componentId: number) => {
        this.searchForm.get('searchInput')?.setValue('', { emitEvent: false });

        this.onChange.emit({
          id: componentId,
          query: '',
        });
      });

    this.searchForm
      .get('searchInput')
      ?.valueChanges.subscribe((query: string) => {
        this.searchForm.get('componentId')?.setValue(-1, { emitEvent: false });

        this.onChange.emit({
          id: -1,
          query,
        });
      });
  }
}
