import { Component } from '@angular/core';
import { TuiPlatform } from '@taiga-ui/cdk';
import { TuiBadge } from '@taiga-ui/kit';

@Component({
  selector: 'app-badge-content-type',
  imports: [TuiBadge, TuiPlatform],
  templateUrl: './badge-content-type.component.html',
  styleUrl: './badge-content-type.component.scss',
})
export class BadgeContentTypeComponent {}
