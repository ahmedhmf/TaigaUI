import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiIcon, TuiTitle } from '@taiga-ui/core';
import { TuiBlock, TuiSwitch, TuiTooltip } from '@taiga-ui/kit';

@Component({
  selector: 'app-block-custom',
  imports: [
    ReactiveFormsModule,
    TuiBlock,
    TuiIcon,
    TuiSwitch,
    TuiTitle,
    TuiTooltip,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './block-custom.component.html',
  styleUrl: './block-custom.component.scss',
})
export class BlockCustomComponent {
  protected readonly testForm = new FormGroup({
    testValue3: new FormControl(false),
  });
}
