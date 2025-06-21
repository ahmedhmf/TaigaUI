import { Injectable } from '@angular/core';
import { TuiPopoverService } from '@taiga-ui/cdk';
import { TUI_DIALOGS } from '@taiga-ui/core';

import { PromptComponent } from './prompt/prompt.component';
import { PromptOptions } from './prompt/prompt.interface';

@Injectable({
  providedIn: 'root',
  useFactory: () =>
    new PromptService(TUI_DIALOGS, PromptComponent, {
      heading: 'Are you sure?',
      buttons: ['Yes', 'No'],
    }),
})
export class PromptService extends TuiPopoverService<PromptOptions, boolean> {}
