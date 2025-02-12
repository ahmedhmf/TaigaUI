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
  readonly #componentTypeFilterConfig = AppConfig.componentTypeFilter;
  readonly #components = AppConfig.components;

  #search = signal<SearchFilter>({
    id: -1,
    query: null,
  });

  state = computed((): ComponentStructure[] => {
    const selectedId = this.#search().id;
    const query = this.#search().query?.toLocaleLowerCase();
    if (query) {
      return this.#components.filter(
        (c) =>
          c.label.toLocaleLowerCase().includes(query) ||
          c.title.toLocaleLowerCase().includes(query)
      );
    } else {
      return selectedId === -1
        ? this.#components
        : this.#components.filter((c) => c.id === selectedId);
    }
  });

  getToolbarFilterByComponentTypeConfig(): ComboBox {
    return this.#componentTypeFilterConfig;
  }

  onSearchChange(data: SearchFilter): void {
    const { id, query } = data;

    this.#search.set({
      id: id ?? -1,
      query,
    });
  }
}
