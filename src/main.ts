import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TuiRoot } from '@taiga-ui/core';
import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { provideRouter } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [TuiRoot, DashboardComponent],
  template: `
    <tui-root>
      <app-dashboard />
    </tui-root>
  `,
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideAnimations(),
    provideRouter([]),
    NG_EVENT_PLUGINS,
    {
      provide: 'Pythons',
      useValue: [
        'John Cleese',
        'Eric Idle',
        'Michael Palin',
        'Graham Chapman',
        'Terry Gilliam',
        'Terry Jones',
      ],
    },
  ],
}).catch((err) => console.error(err));
