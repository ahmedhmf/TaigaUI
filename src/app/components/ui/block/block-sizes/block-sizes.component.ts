import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiBlock, TuiCheckbox } from "@taiga-ui/kit";
 

@Component({
  selector: 'app-block-sizes',
  imports: [
    ReactiveFormsModule,
    TuiBlock,
    TuiCheckbox,   
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './block-sizes.component.html',
  styleUrl: './block-sizes.component.scss',
})
export class BlockSizesComponent {
  protected readonly testForm = new FormGroup({
    testValue2: new FormControl({value: false, disabled: true}),
    testValue3: new FormControl({value: true, disabled: true}),
    testValue4: new FormControl(false),
});
}
