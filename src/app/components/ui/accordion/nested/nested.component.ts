import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAccordion } from '@taiga-ui/experimental';

@Component({
  selector: 'app-nested',
  imports: [TuiAccordion],
  templateUrl: './nested.component.html',
  styleUrl: './nested.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NestedComponent {}
