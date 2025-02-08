import { NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { tuiIsString } from '@taiga-ui/cdk';
import { TuiDataList, TuiDropdown, TuiIcon } from '@taiga-ui/core';
import { TuiChevron, TuiTabs } from '@taiga-ui/kit';

@Component({
  selector: 'app-tabs-complex',
  imports: [TuiChevron, TuiDataList, TuiDropdown, TuiIcon, TuiTabs],
  templateUrl: './tabs-complex.component.html',
  styleUrl: './tabs-complex.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComplexComponent {
  protected readonly collaborators = ['Carol Cleveland', 'Neil Innes'];

  protected readonly tabs = [
    this.collaborators,
    ...inject<readonly string[]>('Pythons' as any),
  ];

  protected activeElement = String(this.collaborators[0]);

  protected get activeItemIndex(): number {
    if (this.collaborators.includes(this.activeElement)) {
      return this.tabs.indexOf(this.collaborators);
    }

    return this.tabs.indexOf(this.activeElement);
  }

  protected stop(event: Event): void {
    // We need to stop tab custom event so parent component does not think its active
    event.stopPropagation();
  }

  protected onClick(activeElement: string): void {
    this.activeElement = activeElement;
  }

  protected isString(tab: unknown): tab is string {
    return tuiIsString(tab);
  }
}
