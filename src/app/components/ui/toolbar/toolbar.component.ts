import { AfterViewInit, ChangeDetectionStrategy, Component, inject, output } from "@angular/core";
import { ComboBoxComponent } from "../taiga/combo-box/combo-box.component";
import { DashboardService, SearchFilter } from "../../../services/dashboard.service";
import { FormBuilder, FormControl, ReactiveFormsModule } from "@angular/forms";
import { SearchComponent } from "../taiga/search/search.component";

@Component({
    selector: 'app-toolbar',
    standalone: true,
    templateUrl: './toolbar.component.html',    
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ReactiveFormsModule, ComboBoxComponent, SearchComponent],
  })
  export class ToolbarComponent implements AfterViewInit {
    protected readonly dashboardService = inject(DashboardService);
    readonly #formBuilder = inject(FormBuilder);
    onChange = output<SearchFilter>();

    searchForm = this.#formBuilder.group({
        componentId: new FormControl<number>(-1),
        searchInput: new FormControl<string>('')
    });

    ngAfterViewInit(): void {
      this.searchForm.valueChanges.subscribe(value => {                         
        this.onChange.emit({
          id: value.componentId,
          query: value.searchInput} as SearchFilter);
      });
    }
  }