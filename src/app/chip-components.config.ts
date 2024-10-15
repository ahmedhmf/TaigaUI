import { ComponentStructure } from './app.config';
import { ChipInteractiveComponent } from './components/ui/chip/chip-interactive/chip-interactive.component';
import { ChipSizeContentComponent } from './components/ui/chip/chip-size-content/chip-size-content.component';
import { ChipUseCasesComponent } from './components/ui/chip/chip-use-cases/chip-use-cases.component';
import { ChipComponent } from './components/ui/chip/chip.component';

export const chipComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Chips',
    title: 'Chip',
    description: 'Chip Control',
    url: 'https://taiga-ui.dev/components/chip',
    component: ChipComponent,
  },
  {
    label: 'Chips',
    title: 'Chip Sizes and Content',
    description: 'Chip Sizes and Content',
    url: 'https://taiga-ui.dev/components/chip#sizes-and-content',
    component: ChipSizeContentComponent,
  },
  {
    label: 'Chips',
    title: 'Chip interactive',
    description: 'Chip Sizes and Content',
    url: 'https://taiga-ui.dev/components/chip#interactive',
    component: ChipInteractiveComponent,
  },
  {
    label: 'Chips',
    title: 'Chip Use Cases',
    description: 'Chip Use Cases',
    url: 'https://taiga-ui.dev/components/chip#use-cases',
    component: ChipUseCasesComponent,
  },
];
