import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { TuiButton, TuiScrollbar } from '@taiga-ui/core';

@Component({
  selector: 'app-scrollbar-all',
  imports: [TuiButton, TuiScrollbar],
  templateUrl: './scrollbar-all.component.html',
  styleUrl: './scrollbar-all.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollbarAllComponent {
  @ViewChild(TuiScrollbar, { read: ElementRef })
  private readonly scrollBar?: ElementRef<HTMLElement>;

  protected SOME_OFFSET_CONST = 10;

  protected get scrollTop(): number {
    return this.scrollBar ? this.scrollBar.nativeElement.scrollTop : 0;
  }

  protected get scrollLeft(): number {
    return this.scrollBar ? this.scrollBar.nativeElement.scrollLeft : 0;
  }

  protected onClick(): void {
    if (!this.scrollBar) {
      return;
    }

    const { nativeElement } = this.scrollBar;

    nativeElement.scrollTop =
      nativeElement.scrollTop < this.SOME_OFFSET_CONST
        ? nativeElement.scrollHeight
        : 0;
  }
}
