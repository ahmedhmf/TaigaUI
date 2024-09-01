import { AfterViewInit, ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ComboBoxComponent } from "../taiga/combo-box/combo-box.component";
import { DashboardService } from "../../../services/dashboard.service";
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

    searchForm = this.#formBuilder.group({
        componentType: new FormControl(),
        searchInput: new FormControl()
    });

    ngAfterViewInit(): void {
        this.searchForm.valueChanges.subscribe(x => console.log(x))
    }
  }