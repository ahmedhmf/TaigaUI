
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiRepeatTimes } from '@taiga-ui/cdk';
import {
  TuiBreakpointService,
  TuiButton,
  TuiDataList,
  TuiDropdown,
  TuiIcon,
  TuiLink,
} from '@taiga-ui/core';
import { TuiActionBar, TuiFilter, TuiItemsWithMore } from '@taiga-ui/kit';
import { map } from 'rxjs';

@Component({
  selector: 'app-actionbar-m',
  imports: [
    ReactiveFormsModule,
    TuiActionBar,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiFilter,
    TuiIcon,
    TuiItemsWithMore,
    TuiLink,
    TuiRepeatTimes
],
  templateUrl: './actionbar-m.component.html',
  styleUrls: ['./actionbar-m.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionbarMComponent {
  protected items = ['one', 'two', 'three'];
  protected control = new FormControl<string[]>([]);
  protected expanded = false;

  protected readonly isMobile = toSignal(
    inject(TuiBreakpointService).pipe(map((size) => size === 'mobile'))
  );

  protected get value(): string[] {
    return this.control.value || [];
  }

  protected get open(): boolean {
    return this.value.length > 0;
  }

  protected get selected(): number {
    return this.value.length;
  }

  protected toggleSelect(): void {
    this.control.setValue(this.selected < this.items.length ? this.items : []);
  }

  protected close(): void {
    this.control.setValue([]);
    this.expanded = false;
  }
}
