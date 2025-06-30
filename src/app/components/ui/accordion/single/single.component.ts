import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAccordion } from '@taiga-ui/experimental';

@Component({
  selector: 'app-single',
  imports: [TuiAccordion],
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleComponent {}
