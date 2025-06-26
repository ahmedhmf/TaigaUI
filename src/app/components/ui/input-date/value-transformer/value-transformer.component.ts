import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import { TuiTextfield } from '@taiga-ui/core';
import { TuiInputDate, tuiInputDateOptionsProviderNew } from '@taiga-ui/kit';

@Component({
  selector: 'app-value-transformer',
  imports: [FormsModule, JsonPipe, TuiInputDate, TuiTextfield],
  templateUrl: './value-transformer.component.html',
  styleUrl: './value-transformer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiInputDateOptionsProviderNew({
      valueTransformer: {
        fromControlValue: (value: Date | null): TuiDay | null =>
          value && TuiDay.fromUtcNativeDate(value),
        toControlValue: (value: TuiDay | null): Date | null =>
          value?.toUtcNativeDate() || null,
      },
    }),
  ],
})
export class ValueTransformerComponent {
  protected value: Date | null = null;
}
