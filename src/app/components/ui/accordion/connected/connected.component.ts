import { KeyValuePipe, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { tuiArrayToggle } from '@taiga-ui/cdk';
import { TuiTitle } from '@taiga-ui/core';
import { TuiAccordion } from '@taiga-ui/experimental';
import { TuiAvatar, TuiCheckbox, TuiConnected } from '@taiga-ui/kit';
import { TuiCell } from '@taiga-ui/layout';

@Component({
  selector: 'app-connected',
  imports: [
    FormsModule,
    KeyValuePipe,
    TuiAccordion,
    TuiAvatar,
    TuiCell,
    TuiCheckbox,
    TuiConnected,
    TuiTitle,
  ],
  templateUrl: './connected.component.html',
  styleUrl: './connected.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnectedComponent {
  protected readonly steps = {
    'First steps': {
      text: 'Getting to know your workplace',
      steps: ['Looks around', 'Talk to colleagues', 'Have lunch'],
    },
    'Work day': {
      text: 'Start working',
      steps: ['Open the project', 'Read the documentation', 'Start coding'],
    },
    Mastery: {
      text: 'Become a pro',
      steps: ['Write tests', 'Refactor the code', 'Deploy the project'],
    },
  };

  protected selected = this.steps['First steps'].steps.concat(
    this.steps['Work day'].steps[0] || ''
  );

  protected isChecked(steps: readonly string[]): boolean {
    return steps.every((step) => this.selected.includes(step));
  }

  protected toggle(step: string): void {
    this.selected = tuiArrayToggle(this.selected, step);
  }

  protected orderBy(): number {
    return 0;
  }
}
