import { PaginationAroundActiveComponent } from '../components/ui/pagination/pagination-around-active/pagination-around-active.component';
import { PaginationCustomComponent } from '../components/ui/pagination/pagination-custom/pagination-custom.component';
import { PaginationEdgePagesComponent } from '../components/ui/pagination/pagination-edge-pages/pagination-edge-pages.component';
import { PaginationComponent } from '../components/ui/pagination/pagination/pagination.component';
import { ComponentStructure } from './app.config';

export const paginationComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Pagination',
    title: 'Pagination',
    description: 'Pagination',
    url: 'https://taiga-ui.dev/navigation/pagination#base',
    component: PaginationComponent,
  },
  {
    label: 'Pagination Active',
    title: 'Pagination Active',
    description: 'Pagination Around Active',
    url: 'https://taiga-ui.dev/navigation/pagination#around',
    component: PaginationAroundActiveComponent,
  },
  {
    label: 'Pagination Edges',
    title: 'Pagination Edges',
    description: 'Pagination with edges pages',
    url: 'https://taiga-ui.dev/navigation/pagination#edges',
    component: PaginationEdgePagesComponent,
  },
  {
    label: 'Pagination Custom',
    title: 'Pagination Custom',
    description: 'Pagination custom',
    url: 'https://taiga-ui.dev/navigation/pagination#custom',
    component: PaginationCustomComponent,
  },
];
