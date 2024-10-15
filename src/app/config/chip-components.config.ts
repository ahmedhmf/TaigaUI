import { ComponentStructure } from './app.config';
import { ChipInteractiveComponent } from '../components/ui/chip/chip-interactive/chip-interactive.component';
import { ChipSizeContentComponent } from '../components/ui/chip/chip-size-content/chip-size-content.component';
import { ChipUseCasesComponent } from '../components/ui/chip/chip-use-cases/chip-use-cases.component';
import { ChipComponent } from '../components/ui/chip/chip.component';

export const chipComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Chip',
    title: 'Chip Basic',
    description: 'Chip Control',
    url: 'https://taiga-ui.dev/components/chip',
    component: ChipComponent,
  },
  {
    label: 'Chip Sizes and Content',
    title: 'Chip Sizes and Content',
    description: 'Chip Sizes and Content',
    url: 'https://taiga-ui.dev/components/chip#sizes-and-content',
    component: ChipSizeContentComponent,
  },
  {
    label: 'Chip interactive',
    title: 'Chip interactive',
    description: 'Chip Sizes and Content',
    url: 'https://taiga-ui.dev/components/chip#interactive',
    component: ChipInteractiveComponent,
  },
  {
    label: 'Chip use cases',
    title: 'Chip Use Cases',
    description: 'Chip Use Cases',
    url: 'https://taiga-ui.dev/components/chip#use-cases',
    component: ChipUseCasesComponent,
  },
];
