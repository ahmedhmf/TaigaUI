import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { TuiControl } from '@taiga-ui/cdk';
import {
  TuiDropdownOpen,
  tuiInjectAuxiliary,
  TuiOptionWithValue,
} from '@taiga-ui/core';

@Component({
  selector: 'custom-option',
  template: '<span>{{selected() ? "←" : ""}}</span>',
  styles: [':host {flex-direction: row-reverse; justify-content: start}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.font-weight]': 'selected() ? "bold" : null',
    '(click)': 'onClick()',
  },
})
export class Option<T> {
  private readonly dropdown = inject(TuiDropdownOpen);
  private readonly option = inject<TuiOptionWithValue<T>>(TuiOptionWithValue);
  private readonly control = tuiInjectAuxiliary<TuiControl<T | null>>(
    (x) => x instanceof TuiControl
  );

  protected selected = computed(
    () => this.control()?.value() === this.option.value()
  );

  protected onClick(): void {
    this.control()?.onChange(this.option.value() ?? null);
    this.dropdown.toggle(false);
  }
}
