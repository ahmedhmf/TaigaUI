import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiAmountPipe } from '@taiga-ui/addon-commerce';
import { TuiButton, TuiLoader } from '@taiga-ui/core';
import { TuiAvatar, TuiCarousel } from '@taiga-ui/kit';

@Component({
  selector: 'app-carousel-custom',
  imports: [
    AsyncPipe,
    TuiAmountPipe,
    TuiAvatar,
    TuiButton,
    TuiCarousel,
    TuiLoader,
  ],
  templateUrl: './carousel-custom.component.html',
  styleUrl: './carousel-custom.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselCustomComponent {}
