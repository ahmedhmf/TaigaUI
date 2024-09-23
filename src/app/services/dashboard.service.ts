import {
  computed,
  inject,
  Injectable,
  InjectionToken,
  signal,
} from '@angular/core';
import { AppConfig, ComponentStructure } from '../app.config';
import { ComboBox } from '../components/ui/taiga/combo-box/combo-box.interface';

export const COMPONENT_TYPE_FILTER_CONFIG = new InjectionToken(
  'component_type_filter_config',
  {
    providedIn: 'root',
    factory: () => AppConfig.componentTypeFilter,
  }
);

export type SearchFilter = {
  id: number;
  query: string | null;
};

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  readonly #componentTypeFilterConfig = inject(COMPONENT_TYPE_FILTER_CONFIG);
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

  onSearchChange(data: SearchFilter) {
    const { id, query } = data;

    this.#search.set({
      id: id ?? -1,
      query,
    });
  }
}
