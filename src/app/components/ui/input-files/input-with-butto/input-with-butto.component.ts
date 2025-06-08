import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiItem } from '@taiga-ui/cdk';
import type { TuiFileLike } from '@taiga-ui/kit';
import { TuiFiles } from '@taiga-ui/kit';

@Component({
  selector: 'app-input-with-butto',
  imports: [NgForOf, TuiFiles, TuiItem],
  templateUrl: './input-with-butto.component.html',
  styleUrl: './input-with-butto.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputWithButtoComponent {
  protected height = 3;

  protected readonly files: readonly TuiFileLike[] = [
    {
      name: 'Loaded.txt',
    },
    {
      name: 'one_more_file.txt',
    },
    {
      name: 'one_more_file.txt',
    },
    {
      name: 'one_more_file.txt',
    },
    {
      name: 'one_more_file.txt',
    },
    {
      name: 'one_more_file.txt',
    },
    {
      name: 'last_file.txt',
    },
  ];

  protected readonly rejectedFiles: readonly TuiFileLike[] = [
    {
      name: 'File with an error.txt',
    },
  ];
}
