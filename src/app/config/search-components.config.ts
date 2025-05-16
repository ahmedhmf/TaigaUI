import { SearchFiltersComponent } from '../components/ui/search/search-filters/search-filters.component';
import { SearchSmallComponent } from '../components/ui/search/search-small/search-small.component';
import { ComponentStructure } from './app.config';

export const searchComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Search Filters',
    title: 'Search Filters',
    description: 'Search Filters',
    url: 'https://taiga-ui.dev/components/search#filters',
    component: SearchFiltersComponent,
  },
  {
    label: 'Search Small',
    title: 'Search Small',
    description: 'Search Small',
    url: 'https://taiga-ui.dev/components/search#small',
    component: SearchSmallComponent,
  },
];
