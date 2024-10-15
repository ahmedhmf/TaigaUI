import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no-items-found',
  standalone: true,
  imports: [],
  templateUrl: './no-items-found.component.html',
  styleUrl: './no-items-found.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoItemsFoundComponent {}
