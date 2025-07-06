import { computed, Injectable, linkedSignal, signal } from '@angular/core';
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
  private pageSize = signal(9);

  loading = signal(false);
  currentPage = signal(1);

  private items = computed((): ComponentStructure[] => {
    const { id: selectedId, query } = this.search();
    const lowerCaseQuery = query?.toLocaleLowerCase();

    if (lowerCaseQuery) {
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

  totalPages = computed(() => Math.ceil(this.items().length / 9));

  componentItems = linkedSignal<number, ComponentStructure[]>({
    source: () => this.currentPage(),
    computation: (currentPage, previous) => {
      // We consider 9 items per page
      const startIndex = (currentPage - 1) * this.pageSize();
      const newItems = this.items().slice(
        startIndex,
        startIndex + this.pageSize()
      );

      // Accumulate if previous exists and currentPage > 1
      return currentPage > 1 && previous?.value
        ? [...previous.value, ...newItems]
        : newItems;
    },
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

      this.currentPage.set(1);
      this.loading.set(false);
    }, 500);
  }

  onNextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((page) => page + 1);
    }
  }
}
