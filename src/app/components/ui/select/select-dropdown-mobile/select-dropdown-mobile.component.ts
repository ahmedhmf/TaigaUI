import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiDropdownMobile } from '@taiga-ui/addon-mobile';
import type { TuiBooleanHandler } from '@taiga-ui/cdk';
import { TuiPlatform } from '@taiga-ui/cdk';
import { TuiTextfield } from '@taiga-ui/core';
import { TuiChevron, TuiDataListWrapper, TuiSelect } from '@taiga-ui/kit';

@Component({
  selector: 'app-select-dropdown-mobile',
  imports: [
    FormsModule,
    TuiChevron,
    TuiDataListWrapper,
    TuiDropdownMobile,
    TuiPlatform,
    TuiSelect,
    TuiTextfield,
  ],
  templateUrl: './select-dropdown-mobile.component.html',
  styleUrl: './select-dropdown-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectDropdownMobileComponent {
  protected readonly platforms = ['web', 'ios', 'android'] as const;
  protected value: 'android' | 'ios' | 'web' | null = 'ios';
  protected readonly disabledItemHandler: TuiBooleanHandler<string> = (x) =>
    x === 'web';
}
