import { inject, Injectable, InjectionToken } from "@angular/core";
import { ComboBox } from "../components/ui/taiga/combo-box/combo-box.interface";
import { AppConfig } from "../app.config";

export const COMPONENT_TYPE_FILTER_CONFIG = new InjectionToken(
  'component_type_filter_config',
  {
  providedIn: 'root',
  factory: () => AppConfig.componentTypeFilter
});

@Injectable({
    providedIn: 'root',
  })
  export class DashboardService {

    componentTypeFilterConfig = inject(COMPONENT_TYPE_FILTER_CONFIG);

    getToolbarFilterByComponentTypeConfig(): ComboBox {
      return this.componentTypeFilterConfig;
    }

  }