import { isPlatformBrowser, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, PLATFORM_ID } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { TuiCarousel, TuiPagination } from '@taiga-ui/kit';

@Component({
  selector: 'app-carousel-single',
  imports: [TuiButton, TuiCarousel, TuiPagination],
  templateUrl: './carousel-single.component.html',
  styleUrl: './carousel-single.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselSingleComponent {
  protected duration = isPlatformBrowser(inject(PLATFORM_ID)) ? 4_000 : 0;
  protected index = 2;
  protected readonly items = inject<readonly string[]>('Pythons' as any);
}
