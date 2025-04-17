import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiNavigation } from '@taiga-ui/layout';
import { NoItemsFoundComponent } from '../components/ui/taiga/no-items-found/no-items-found.component';
import { ToolbarComponent } from '../components/ui/toolbar/toolbar.component';
import { ElementCardComponent } from '../controls/element-card/element-card.component';
import { ElementContainerComponent } from '../controls/element-container/element-container.component';
import { DashboardService } from '../services/dashboard.service';
import { TuiLoader } from '@taiga-ui/core';
import { ObserveVisibilityDirective } from './observer-visibility.directive';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: 'dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TuiNavigation,
    ToolbarComponent,
    NgComponentOutlet,
    ElementContainerComponent,
    ElementCardComponent,
    NoItemsFoundComponent,
    TuiLoader,
    ObserveVisibilityDirective,
    NgTemplateOutlet,
  ],
})
export class DashboardComponent {
  protected readonly dashboardService = inject(DashboardService);
  loading = this.dashboardService.loading;
}
