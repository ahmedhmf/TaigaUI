import { Component } from '@angular/core';
import { TuiIcon, tuiIconResolverProvider } from '@taiga-ui/core';

@Component({
  selector: 'app-icon-external',
  imports: [TuiIcon],
  templateUrl: './icon-external.component.html',
  styleUrl: './icon-external.component.scss',
  providers: [
    tuiIconResolverProvider((icon) =>
      icon.includes('/') ? icon : `/assets/icons/${icon}.svg`
    ),
  ],
})
export class IconExternalComponent {}
