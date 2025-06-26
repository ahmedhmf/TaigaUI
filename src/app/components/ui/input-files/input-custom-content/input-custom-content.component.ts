
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiIcon, TuiLink } from '@taiga-ui/core';
import type { TuiFileLike } from '@taiga-ui/kit';
import { TuiAvatar, TuiFiles } from '@taiga-ui/kit';

@Component({
  selector: 'app-input-custom-content',
  imports: [ReactiveFormsModule, TuiAvatar, TuiFiles, TuiIcon, TuiLink],
  templateUrl: './input-custom-content.component.html',
  styleUrl: './input-custom-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputCustomContentComponent {
  protected readonly control = new FormControl<TuiFileLike | null>(null);

  protected readonly file: TuiFileLike = {
    name: 'custom.txt',
  };
}
