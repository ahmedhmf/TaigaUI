import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiPlatform } from '@taiga-ui/cdk';
import { TuiSizeS } from '@taiga-ui/core';
import { TuiSwitch } from '@taiga-ui/kit';

@Component({
  selector: 'app-switch',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiPlatform,
    TuiSwitch,
  ],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss',
})
export class SwitchComponent {
  protected readonly platforms: ReadonlyArray<'android' | 'ios' | 'web'> = [
    'web',
    'web',
    'android',
    'ios',
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
