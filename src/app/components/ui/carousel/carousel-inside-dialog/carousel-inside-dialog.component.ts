import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiButton, TuiDialog, TuiLink } from '@taiga-ui/core';
import { TuiCarousel, TuiPagination } from '@taiga-ui/kit';

@Component({
  selector: 'app-carousel-inside-dialog',
  imports: [
    RouterLink,
    TuiButton,
    TuiCarousel,
    TuiDialog,
    TuiLink,
    TuiPagination,
  ],
  templateUrl: './carousel-inside-dialog.component.html',
  styleUrl: './carousel-inside-dialog.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselInsideDialogComponent {
  protected readonly routes: any = {};
  protected open = false;

  protected index = 0;

  protected get background(): string {
    switch (this.index) {
      case 0:
        return 'url(https://cdn.tvc.ru/pictures/mood/bw/194/22.jpg)';
      case 1:
        return 'url(https://ic.pics.livejournal.com/ruhtal/6943012/12468/12468_900.jpg)';
      default:
        return 'url(https://cdn.motor1.com/images/mgl/28bxz/s1/ford-carousel.jpg)';
    }
  }

  protected onClick(): void {
    this.index = 0;
    this.open = true;
  }

  protected navigate(delta: number): void {
    this.index = (this.index + delta) % 3;
  }
}
