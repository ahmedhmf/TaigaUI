import { Component } from '@angular/core';
import { TuiPlatform } from '@taiga-ui/cdk';
import { TuiSurface } from '@taiga-ui/core';
import { TuiBadge, TuiIconBadge } from '@taiga-ui/kit';
import { ElementCardComponent } from '../../../../controls/element-card/element-card.component';
import { ElementContainerComponent } from '../../../../controls/element-container/element-container.component';

@Component({
  selector: 'app-badge-content-type',
  standalone: true,
  imports: [
    TuiBadge,
    TuiPlatform,
    ElementCardComponent,
    TuiIconBadge,
    TuiSurface,
    ElementContainerComponent,
  ],
  templateUrl: './badge-content-type.component.html',
  styleUrl: './badge-content-type.component.scss',
})
export class BadgeContentTypeComponent {}
