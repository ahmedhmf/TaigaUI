import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiHint } from '@taiga-ui/core';

@Component({
  selector: 'app-hint-auto',
  standalone: true,
  imports: [TuiHint],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hint-auto.component.html',
  styleUrl: './hint-auto.component.scss'
})
export class HintAutoComponent {

}
