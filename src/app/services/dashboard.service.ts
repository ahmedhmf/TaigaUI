import { computed, inject, Injectable, InjectionToken, signal } from "@angular/core";
import { ComboBox } from "../components/ui/taiga/combo-box/combo-box.interface";
import { AppConfig } from "../app.config";

export const COMPONENT_TYPE_FILTER_CONFIG = new InjectionToken(
  'component_type_filter_config',
  {
  providedIn: 'root',
  factory: () => AppConfig.componentTypeFilter
});

export type SearchFilter = {
  id: number;
  query: string | null;
}

@Injectable({
    providedIn: 'root',
  })
  export class DashboardService {

    readonly #componentTypeFilterConfig = inject(COMPONENT_TYPE_FILTER_CONFIG);
    readonly #components = AppConfig.components;
    #search = signal<SearchFilter>({
      id: -1,
      query: null
    });

    state = computed(() => { 
      const selectedId = this.#search().id;              
      
      return selectedId === -1 ? this.#components : this.#components.filter(c => c.id === selectedId);        
    });

    getToolbarFilterByComponentTypeConfig(): ComboBox {
      return this.#componentTypeFilterConfig;
    }

    onSearchChange(data: SearchFilter) {
      this.#search.set(data);
    }

}