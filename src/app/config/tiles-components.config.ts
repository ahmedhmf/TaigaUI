import { TilesBasicComponent } from '../components/ui/tiles/tiles-basic/tiles-basic.component';
import { TilesVerticalComponent } from '../components/ui/tiles/tiles-vertical/tiles-vertical.component';
import { ComponentStructure } from './app.config';

export const tilesComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Tiles',
    title: 'Tiles',
    description: 'Tiles Basic (drag and drop)',
    url: 'https://taiga-ui.dev/components/tiles#base',
    component: TilesBasicComponent,
  },
  {
    label: 'Tiles Vertical',
    title: 'Tiles Vertical',
    description: 'Tiles with media query width control',
    url: 'https://taiga-ui.dev/components/tiles#vertical',
    component: TilesVerticalComponent,
  },
];
