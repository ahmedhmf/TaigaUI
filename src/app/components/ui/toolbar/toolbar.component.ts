import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  output,
} from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {
  DashboardService,
  SearchFilter,
} from '../../../services/dashboard.service';
import { ComboBoxComponent } from '../taiga/combo-box/combo-box.component';
import { SearchComponent } from '../taiga/search/search.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  private readonly destroyRef = inject(DestroyRef);

  protected readonly dashboardService = inject(DashboardService);
  private readonly formBuilder = inject(FormBuilder);
  onChange = output<SearchFilter>();

  searchForm = this.formBuilder.group<SearchForm>({
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
      ?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((componentId: number) => {
        this.resetSearchInput();
        this.emitSearchChange(componentId, '');
      });

    this.searchForm
      .get('searchInput')
      ?.valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((query: string) => {
        this.resetComponentId();
        this.emitSearchChange(-1, query);
      });
  }

  private resetSearchInput(): void {
    this.searchForm.get('searchInput')?.setValue('', { emitEvent: false });
  }

  private resetComponentId(): void {
    this.searchForm.get('componentId')?.setValue(-1, { emitEvent: false });
  }

  private emitSearchChange(id: number, query: string): void {
    this.onChange.emit({ id, query });
  }
}
