import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAlert, TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-alert-directive',
  imports: [TuiAlert, TuiButton],
  templateUrl: './alert-directive.component.html',
  styleUrl: './alert-directive.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDirectiveComponent {
  protected show = false;
}
