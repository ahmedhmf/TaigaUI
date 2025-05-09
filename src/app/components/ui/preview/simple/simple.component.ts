import type { TemplateRef } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewChild,
} from '@angular/core';
import type { TuiDialogContext } from '@taiga-ui/core';
import { TuiButton } from '@taiga-ui/core';
import { TuiPreview, TuiPreviewDialogService } from '@taiga-ui/kit';

@Component({
  selector: 'app-simple',
  imports: [TuiButton, TuiPreview],
  templateUrl: './simple.component.html',
  styleUrl: './simple.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleComponent {
  private readonly previewDialogService = inject(TuiPreviewDialogService);

  @ViewChild('preview')
  protected readonly preview?: TemplateRef<TuiDialogContext>;

  protected show(): void {
    this.previewDialogService.open(this.preview || '').subscribe();
  }
}
