import { Injectable } from "@angular/core";
import { ComboBox } from "../components/ui/taiga/combo-box/combo-box.interface";

@Injectable({
    providedIn: 'root',
  })
  export class DashboardService {

    getToolbarFilterByComponenetTypeConfig(): ComboBox {
      return {
        label: 'Component type',
        placeHolder: 'Component type',
        items: [{
            id: 1,
            value: 'Text inputs'
        },
        {
            id: 2,
            value: 'Buttons'
        },
        {
          id: 3,
          value: 'Legacy'
        }
      ]
      }
    }

  }