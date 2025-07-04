import { BasicComponent } from '../components/ui/calendar/basic/basic.component';
import { ColorCustomComponent } from '../components/ui/calendar/color-custom/color-custom.component';
import { LocalizationComponent } from '../components/ui/calendar/localization/localization.component';
import { OpenInYearComponent } from '../components/ui/calendar/open-in-year/open-in-year.component';
import { RangeComponent } from '../components/ui/calendar/range/range.component';
import { SelectMultipleDateComponent } from '../components/ui/calendar/select-multiple-date/select-multiple-date.component';
import { WithMarkersComponent } from '../components/ui/calendar/with-markers/with-markers.component';
import { ComponentStructure } from './app.config';

export const calendarComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Calendar Basic',
    title: 'Calendar Basic',
    description: 'Calendar Basic',
    url: 'https://taiga-ui.dev/components/calendar#basic',
    component: BasicComponent,
  },
  {
    label: 'Calendar Range',
    title: 'Calendar Range',
    description: 'Calendar Range',
    url: 'https://taiga-ui.dev/components/calendar#range',
    component: RangeComponent,
  },
  {
    label: 'Calendar With Markers',
    title: 'Calendar With Markers',
    description: 'Calendar With Markers',
    url: 'https://taiga-ui.dev/components/calendar#with-markers',
    component: WithMarkersComponent,
  },
  {
    label: 'Calendar Localization',
    title: 'Calendar Localization',
    description: 'Calendar Localization',
    url: 'https://taiga-ui.dev/components/calendar#localization',
    component: LocalizationComponent,
  },
  {
    label: 'Calendar Color Customization',
    title: 'Calendar Color Customization',
    description: 'Calendar Color Customization',
    url: 'https://taiga-ui.dev/components/calendar#color-customization',
    component: ColorCustomComponent,
  },
  {
    label: 'Calendar Select Multiple Dates',
    title: 'Calendar Select Multiple Dates',
    description: 'Calendar Select Multiple Dates',
    url: 'https://taiga-ui.dev/components/calendar#select-multiple-dates',
    component: SelectMultipleDateComponent,
  },
  {
    label: 'Calendar Open in Year',
    title: 'Calendar Open in Year View',
    description: 'Calendar Open in Year',
    url: 'https://taiga-ui.dev/components/calendar#open-in-year-view',
    component: OpenInYearComponent,
  },
];
