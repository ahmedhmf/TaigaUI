import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiButton } from '@taiga-ui/core';
import { TuiRating } from '@taiga-ui/kit';

@Component({
  selector: 'app-rating-custom-icon',
  imports: [FormsModule, NgIf, TuiButton, TuiRating],
  templateUrl: './rating-custom-icon.component.html',
  styleUrl: './rating-custom-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingCustomIconComponent {
  protected value = 0;

  protected readonly icon = ({ $implicit }: any) => {
    switch ($implicit) {
      case 1:
        return '@tui.frown';
      case 2:
        return '@tui.meh';
      default:
        return '@tui.smile';
    }
  };
}
