import { AsyncPipe } from '@angular/common';
import type { TemplateRef } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewChild,
} from '@angular/core';
import { tuiIsPresent } from '@taiga-ui/cdk';
import type { TuiDialogContext } from '@taiga-ui/core';
import { TuiButton, TuiIcon, TuiLoader } from '@taiga-ui/core';
import { TuiPreview, TuiPreviewDialogService } from '@taiga-ui/kit';
import type { Observable } from 'rxjs';
import {
  BehaviorSubject,
  filter,
  map,
  of,
  startWith,
  switchMap,
  timer,
} from 'rxjs';
@Component({
  selector: 'app-with-loading-unavailable-image',
  imports: [AsyncPipe, TuiButton, TuiIcon, TuiLoader, TuiPreview],
  templateUrl: './with-loading-unavailable-image.component.html',
  styleUrl: './with-loading-unavailable-image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WithLoadingUnavailableImageComponent {
  private readonly previewDialogService = inject(TuiPreviewDialogService);

  @ViewChild('preview')
  protected readonly preview?: TemplateRef<TuiDialogContext>;

  protected readonly items = [
    {
      title: 'some table.xlsx',
      hasPreview: false,
    },
    {
      title: 'Content #2',
      hasPreview: true,
    },
  ];

  protected readonly index$$ = new BehaviorSubject<number>(0);

  protected readonly item$ = this.index$$.pipe(
    map((index) => this.items[index]),
    filter(tuiIsPresent)
  );

  protected readonly title$ = this.item$.pipe(map((item) => item.title));

  protected readonly contentUnavailable$ = this.item$.pipe(
    map((item) => !item.hasPreview)
  );

  protected readonly imageSrc$ = this.item$.pipe(
    switchMap((item) =>
      item.hasPreview
        ? this.emulateBackendRequest().pipe(startWith(''))
        : of(null)
    )
  );

  protected readonly loading$ = this.imageSrc$.pipe(map((src) => src === ''));

  protected show(): void {
    this.previewDialogService.open(this.preview || '').subscribe();
  }

  protected download(): void {
    console.info('downloading...');
  }

  protected emulateBackendRequest(): Observable<string> {
    return timer(1500).pipe(
      map(() => 'https://ng-web-apis.github.io/dist/assets/images/web-api.svg')
    );
  }
}
