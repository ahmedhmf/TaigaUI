import {
  ChangeDetectionStrategy,
  Component,
  inject,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { tuiClamp, TuiSwipe, TuiSwipeEvent } from '@taiga-ui/cdk';
import { TuiAlertService, TuiButton, TuiDialogContext } from '@taiga-ui/core';
import { TuiPreview, TuiPreviewDialogService } from '@taiga-ui/kit';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import { PolymorpheusOutlet } from '@taiga-ui/polymorpheus';

@Component({
  selector: 'app-full-preview',
  imports: [PolymorpheusOutlet, TuiButton, TuiPreview, TuiSwipe],
  templateUrl: './full-preview.component.html',
  styleUrl: './full-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullPreviewComponent {
  private readonly previewService = inject(TuiPreviewDialogService);
  private readonly alerts = inject(TuiAlertService);

  @ViewChild('preview')
  protected readonly preview?: TemplateRef<TuiDialogContext>;

  @ViewChild('contentSample')
  protected readonly contentSample?: TemplateRef<Record<string, unknown>>;

  protected index = 0;
  protected length = 2;
  protected titles = ['Transaction cert.jpg', 'My face.jpg'];

  protected get previewContent(): PolymorpheusContent {
    return this.index === 0 && this.contentSample
      ? this.contentSample
      : 'https://avatars.githubusercontent.com/u/10106368';
  }

  protected show(): void {
    this.previewService.open(this.preview || '').subscribe({
      complete: () => console.info('complete'),
    });
  }

  protected download(): void {
    this.alerts.open('Downloading...').subscribe();
  }

  protected delete(): void {
    this.alerts.open('Deleting...').subscribe();
  }

  protected onSwipe(swipe: TuiSwipeEvent): void {
    if (swipe.direction === 'left') {
      this.index = tuiClamp(this.index + 1, 0, this.length - 1);
    }

    if (swipe.direction === 'right') {
      this.index = tuiClamp(this.index - 1, 0, this.length - 1);
    }
  }
}
