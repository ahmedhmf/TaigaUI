import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from "@angular/core";
import { FormGroupDirective, ReactiveFormsModule } from "@angular/forms";
import { TuiTextfield } from "@taiga-ui/core";
import { TuiSearch } from "@taiga-ui/layout";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  imports: [ReactiveFormsModule, TuiSearch, TuiTextfield],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  public readonly fControlName = input<string>("");
  protected readonly formGroupDirective = inject(FormGroupDirective);
}
