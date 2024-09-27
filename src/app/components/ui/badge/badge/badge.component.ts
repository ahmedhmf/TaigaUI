import { Component } from '@angular/core';
import { TuiSurface } from '@taiga-ui/core';
import { TuiBadge, TuiIconBadge } from '@taiga-ui/kit';
import { ElementCardComponent } from '../../../../controls/element-card/element-card.component';
import { ElementContainerComponent } from '../../../../controls/element-container/element-container.component';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [
    TuiBadge,
    ElementCardComponent,
    TuiIconBadge,
    TuiSurface,
    ElementContainerComponent,
  ],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {}
