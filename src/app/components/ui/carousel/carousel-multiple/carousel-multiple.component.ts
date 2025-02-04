import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiCarousel } from '@taiga-ui/kit';

@Component({
  selector: 'app-carousel-multiple',
  imports: [TuiCarousel],
  templateUrl: './carousel-multiple.component.html',
  styleUrl: './carousel-multiple.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselMultipleComponent {
  protected index = 0;

  protected readonly items = [
    'angular.svg',
    'avatar.jpg',
    'angular.svg',
    'avatar.jpg',
    'angular.svg',
    'avatar.jpg',
  ];
}
