import { TableBasicComponent } from '../components/ui/table/table-basic/table-basic.component';
import { TableColumnsDynamicComponent } from '../components/ui/table/table-columns-dynamic/table-columns-dynamic.component';
import { TableCustomComponent } from '../components/ui/table/table-custom/table-custom.component';
import { TableEditableComponent } from '../components/ui/table/table-editable/table-editable.component';
import { TableFooterComponent } from '../components/ui/table/table-footer/table-footer.component';
import { TableResizeComponent } from '../components/ui/table/table-resize/table-resize.component';
import { TableSortbyComponent } from '../components/ui/table/table-sortby/table-sortby.component';
import { TableVirtualScrollComponent } from '../components/ui/table/table-virtual-scroll/table-virtual-scroll.component';
import { ComponentStructure } from './app.config';

export const tableComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Table',
    title: 'Table Basic',
    description: 'Table basic',
    url: 'https://taiga-ui.dev/components/table#basic',
    component: TableBasicComponent,
  },
  {
    label: 'Table Custom',
    title: 'Table Custom',
    description: 'Table Custom',
    url: 'https://taiga-ui.dev/components/table#custom',
    component: TableCustomComponent,
  },
  {
    label: 'Table Editable',
    title: 'Table Editable',
    description: 'Table Editable',
    url: 'https://taiga-ui.dev/components/table#editable',
    component: TableEditableComponent,
  },
  {
    label: 'Table sort',
    title: 'Table sort',
    description: 'Table sort with tuiSortBy and column titles',
    url: 'https://taiga-ui.dev/components/table#with-tui-sort-by-directive-to-work-with-column-titles-instead-of-sorters',
    component: TableSortbyComponent,
  },
  {
    label: 'Table Virtual Scroll',
    title: 'Table Virtual Scroll',
    description: 'Table with virtual scroll',
    url: 'https://taiga-ui.dev/components/table#virtual-scroll',
    component: TableVirtualScrollComponent,
  },
  {
    label: 'Table Dynamic Columns',
    title: 'Table Dynamic Columns',
    description: 'Table with dynamic columns',
    url: 'https://taiga-ui.dev/components/table#dynamic-columns',
    component: TableColumnsDynamicComponent,
  },
  {
    label: 'Table Footer',
    title: 'Table Footer',
    description: 'Table with footer',
    url: 'https://taiga-ui.dev/components/table#footer',
    component: TableFooterComponent,
  },
  {
    label: 'Table Resizable',
    title: 'Table Resizable',
    description: 'Table resizable with large data',
    url: 'https://taiga-ui.dev/components/table#resize-a-large-table',
    component: TableResizeComponent,
  },
];
