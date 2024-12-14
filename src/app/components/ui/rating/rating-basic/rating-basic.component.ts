import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiRating } from '@taiga-ui/kit';

@Component({
  selector: 'app-rating-basic',
  imports: [FormsModule, TuiRating],
  templateUrl: './rating-basic.component.html',
  styleUrl: './rating-basic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingBasicComponent {
  value = 0;
}
