import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ToolbarComponent } from "../components/ui/toolbar/toolbar.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',    
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ToolbarComponent],
  })
  export class DashboardComponent {}