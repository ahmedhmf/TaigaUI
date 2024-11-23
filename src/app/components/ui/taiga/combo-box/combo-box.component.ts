import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { FormGroupDirective, ReactiveFormsModule} from '@angular/forms';
import {TuiDataList} from '@taiga-ui/core';
import {TuiComboBoxModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {
  TuiDataListWrapper,
  TuiFilterByInputPipe,
  TuiStringifyContentPipe,  
} from '@taiga-ui/kit';
import { ComboBox } from './combo-box.interface';
import { tuiPure } from '@taiga-ui/cdk';
 
@Component({
    selector: 'app-combo-box',
    templateUrl: './combo-box.component.html',
    imports: [
        ReactiveFormsModule,
        TuiDataListWrapper,
        TuiDataList,
        TuiFilterByInputPipe,
        TuiStringifyContentPipe,
        TuiTextfieldControllerModule,
        TuiComboBoxModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComboBoxComponent {

  public readonly config = input.required<ComboBox>();
  public readonly fControlName = input<string>('');

  protected readonly items = computed(() => this.config().items.map(({id}) => id))
  
  protected readonly formGroupDirective = inject(FormGroupDirective);

  @tuiPure
  itemValue(id: number | string) {    
    return this.config().items.find((item) => item.id === id)?.label || '';
  }
  
}