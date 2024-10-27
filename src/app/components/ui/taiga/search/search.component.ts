import { JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { TuiButton, TuiTextfield } from '@taiga-ui/core';
import { TuiSearch } from '@taiga-ui/layout';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  imports: [ReactiveFormsModule, TuiSearch, TuiTextfield, TuiButton, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  public readonly fControlName = input<string>('');
  protected readonly formGroupDirective = inject(FormGroupDirective);
}
