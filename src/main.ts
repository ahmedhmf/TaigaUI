import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TuiRoot } from '@taiga-ui/core';
import { AvatarComponent } from './app/avatar/avatar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TuiRoot, AvatarComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <app-avatar></app-avatar>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
