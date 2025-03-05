import { computed, Injectable, signal } from '@angular/core';
import { ComboBox } from '../components/ui/taiga/combo-box/combo-box.interface';
import { AppConfig, ComponentStructure } from '../config/app.config';

export type SearchFilter = {
  id: number;
  query: string | null;
};

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly componentTypeFilterConfig = AppConfig.componentTypeFilter;
  private readonly components = AppConfig.components;

  private search = signal<SearchFilter>({
    id: -1,
    query: null,
  });

  loading = signal(false);

  componentItems = computed((): ComponentStructure[] => {
    const { id: selectedId, query } = this.search();
    const lowerCaseQuery = query?.toLocaleLowerCase();

    if (lowerCaseQuery && lowerCaseQuery.length > 3) {
      return this.components.filter(
        ({ label, title }) =>
          label.toLocaleLowerCase().includes(lowerCaseQuery) ||
          title.toLocaleLowerCase().includes(lowerCaseQuery)
      );
    } else {
      return selectedId === -1
        ? this.components
        : this.components.filter(({ id }) => id === selectedId);
    }
  });

  getToolbarFilterByComponentTypeConfig(): ComboBox {
    return this.componentTypeFilterConfig;
  }

  onSearchChange(data: SearchFilter): void {
    this.loading.set(true);

    setTimeout(() => {
      this.search.update(() => ({
        id: data.id ?? -1,
        query: data.query ?? null,
      }));

      this.loading.set(false);
    }, 500);
  }
}
