import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton, TuiGroup } from '@taiga-ui/core';

@Component({
  selector: 'app-group-button',
  imports: [TuiButton, TuiGroup],
  templateUrl: './group-button.component.html',
  styleUrl: './group-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupButtonComponent {}
