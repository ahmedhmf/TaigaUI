import { Component } from '@angular/core';
import { TuiBadge, TuiFade } from '@taiga-ui/kit';

@Component({
  selector: 'app-badge-long',
  standalone: true,
  imports: [TuiBadge, TuiFade],
  templateUrl: './badge-long.component.html',
  styleUrl: './badge-long.component.scss',
})
export class BadgeLongComponent {}
