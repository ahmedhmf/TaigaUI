import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiRating } from '@taiga-ui/kit';

@Component({
  selector: 'app-rating-static',
  imports: [FormsModule, TuiRating],
  templateUrl: './rating-static.component.html',
  styleUrl: './rating-static.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingStaticComponent {}
