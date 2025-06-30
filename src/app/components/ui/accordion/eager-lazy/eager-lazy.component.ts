import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAccordion } from '@taiga-ui/experimental';

@Component({
  selector: 'app-eager-lazy',
  imports: [TuiAccordion],
  templateUrl: './eager-lazy.component.html',
  styleUrl: './eager-lazy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EagerLazyComponent {}
