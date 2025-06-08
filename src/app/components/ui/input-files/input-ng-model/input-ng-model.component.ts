import { AsyncPipe, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiFiles } from '@taiga-ui/kit';

@Component({
  selector: 'app-input-ng-model',
  imports: [AsyncPipe, FormsModule, NgForOf, TuiFiles],

  templateUrl: './input-ng-model.component.html',
  styleUrl: './input-ng-model.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputNgModelComponent {
  protected files: File[] = [];
  protected rejected: File[] = [];

  protected onRemove(remove: File): void {
    this.files = this.files.filter((file) => file !== remove);
    this.rejected = this.rejected.filter((file) => file !== remove);
  }

  protected onChange(files: File[]): void {
    this.files = files.filter((file) => !this.rejected.includes(file));
  }

  protected onReject(rejected: File[]): void {
    this.rejected = rejected;
  }
}
