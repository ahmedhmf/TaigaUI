import {ChangeDetectionStrategy, Component} from "@angular/core";
import {ToolbarComponent} from "../components/ui/toolbar/toolbar.component";
import {ButtonComponent} from "../components/ui/button/button.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: 'dashboard.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ToolbarComponent, ButtonComponent],
})
export class DashboardComponent {
}