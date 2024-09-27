import { Component, ViewEncapsulation } from '@angular/core';
import { ElementCardComponent } from '../../../../controls/element-card/element-card.component';
import { TuiSurface } from '@taiga-ui/core';
import { TuiBadge, TuiIconBadge } from '@taiga-ui/kit';
import { ElementContainerComponent } from '../../../../controls/element-container/element-container.component';

@Component({
  selector: 'app-badge-sizes',
  standalone: true,
  imports: [
    TuiBadge,
    ElementCardComponent,
    TuiIconBadge,
    TuiSurface,
    ElementContainerComponent,
  ],
  templateUrl: './badge-sizes.component.html',
  styleUrl: './badge-sizes.component.scss',
})
export class BadgeSizesComponent {}
