import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TuiRoot } from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DashboardComponent } from "./app/dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TuiRoot, DashboardComponent],
  template: `
  	<tui-root>      
      <app-dashboard />      
    </tui-root>
  `,
})
export class App {  
}

bootstrapApplication(App, {
  providers: [    
    provideAnimations(),
    NG_EVENT_PLUGINS,    
  ],
}).catch((err) => console.error(err));
