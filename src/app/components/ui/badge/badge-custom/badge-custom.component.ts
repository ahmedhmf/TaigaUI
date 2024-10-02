import { Component } from '@angular/core';
import { TuiBadge } from '@taiga-ui/kit';

@Component({
  selector: 'app-badge-custom',
  standalone: true,
  imports: [TuiBadge],
  templateUrl: './badge-custom.component.html',
  styleUrl: './badge-custom.component.scss',
})
export class BadgeCustomComponent {}