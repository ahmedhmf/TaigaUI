import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import type { TuiFileLike } from '@taiga-ui/kit';
import { TuiFiles } from '@taiga-ui/kit';

@Component({
  selector: 'app-input-camera',
  imports: [AsyncPipe, NgIf, ReactiveFormsModule, TuiFiles],
  templateUrl: './input-camera.component.html',
  styleUrl: './input-camera.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputCameraComponent {
  protected readonly control = new FormControl<TuiFileLike | null>(null);

  protected removeFile(): void {
    this.control.setValue(null);
  }
}
