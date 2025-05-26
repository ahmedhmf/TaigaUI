import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiPlatform } from '@taiga-ui/cdk';
import type { TuiSizeS } from '@taiga-ui/core';
import { TuiRadio } from '@taiga-ui/kit';

@Component({
  selector: 'app-radio-platforms',
  imports: [FormsModule, ReactiveFormsModule, TuiPlatform, TuiRadio],
  templateUrl: './radio-platforms.component.html',
  styleUrl: './radio-platforms.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioPlatformsComponent implements OnInit {
  protected readonly platforms: ReadonlyArray<'android' | 'ios' | 'web'> = [
    'web',
    'web',
    'ios',
    'android',
  ];

  protected readonly invalidTrue = new FormControl(true, () => ({
    invalid: true,
  }));
  protected readonly invalidFalse = new FormControl(false, () => ({
    invalid: true,
  }));

  public ngOnInit(): void {
    this.invalidTrue.markAsTouched();
    this.invalidFalse.markAsTouched();
  }

  protected getSize(first: boolean): TuiSizeS {
    return first ? 'm' : 's';
  }
}
