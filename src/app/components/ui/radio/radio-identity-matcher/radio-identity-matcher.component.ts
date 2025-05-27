import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiButton, TuiLabel } from '@taiga-ui/core';
import { TuiRadio } from '@taiga-ui/kit';

interface TestValue {
  test: string;
}

@Component({
  selector: 'app-radio-identity-matcher',
  imports: [FormsModule, TuiButton, TuiLabel, TuiRadio],
  templateUrl: './radio-identity-matcher.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioIdentityMatcherComponent {
  protected value: TestValue | null = null;
  protected identityMatcher = (a: TestValue, b: TestValue): boolean =>
    a?.test === b?.test;
}
