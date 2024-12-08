import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiGroup } from '@taiga-ui/core';
import { TuiBlock, TuiFade } from '@taiga-ui/kit';

@Component({
  selector: 'app-block-groups',
  imports: [ReactiveFormsModule, TuiBlock, TuiFade, TuiGroup],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './block-groups.component.html',
  styleUrl: './block-groups.component.scss',
})
export class BlockGroupsComponent {
  protected readonly testForm = new FormGroup({
    testValue: new FormControl('orange'),
  });
}
