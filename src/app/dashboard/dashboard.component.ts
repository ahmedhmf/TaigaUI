import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import {ToolbarComponent} from "../components/ui/toolbar/toolbar.component";
import {ButtonComponent} from "../components/ui/button/button.component";
import { DashboardService } from "../services/dashboard.service";
import { NgComponentOutlet } from "@angular/common";
import { ElementContainerComponent } from "../controls/element-container/element-container.component";
import { ElementCardComponent } from "../controls/element-card/element-card.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: 'dashboard.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ToolbarComponent, ButtonComponent, NgComponentOutlet, ElementContainerComponent, ElementCardComponent],
})
export class DashboardComponent {
    
    protected readonly dashboardService = inject(DashboardService);     
}