import { Component, SkipSelf } from '@angular/core';
import { TUI_ICON_RESOLVER, TuiIcon } from '@taiga-ui/core';
import { TuiStringHandler } from '@taiga-ui/cdk';

@Component({
  selector: 'app-icon-resolver',
  imports: [TuiIcon],
  templateUrl: './icon-resolver.component.html',
  styleUrl: './icon-resolver.component.scss',
  providers: [
    {
      provide: TUI_ICON_RESOLVER,
      deps: [[new SkipSelf(), TUI_ICON_RESOLVER]],
      useFactory(defaultResolver: TuiStringHandler<string>) {
        return (name: string) =>
          name.startsWith('@tui.')
            ? defaultResolver(name)
            : `/assets/icons/${name}.svg`;
      },
    },
  ],
})
export class IconResolverComponent {}
