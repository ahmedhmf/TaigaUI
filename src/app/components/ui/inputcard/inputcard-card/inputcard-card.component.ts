import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiInputCard, TuiThumbnailCard } from '@taiga-ui/addon-commerce';
import { TuiTextfield } from '@taiga-ui/core';

@Component({
  selector: 'app-inputcard-card',
  imports: [FormsModule, TuiInputCard, TuiTextfield, TuiThumbnailCard],
  templateUrl: './inputcard-card.component.html',
  styleUrl: './inputcard-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputcardCardComponent {
  protected card = '1234123412341234';
}
