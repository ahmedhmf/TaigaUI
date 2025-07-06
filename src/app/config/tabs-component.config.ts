import { TabsActiveIndexComponent } from '../components/ui/tabs/tabs-active-index/tabs-active-index.component';
import { TabsBasicComponent } from '../components/ui/tabs/tabs-basic/tabs-basic.component';
import { TabsClosingComponent } from '../components/ui/tabs/tabs-closing/tabs-closing.component';
import { TabsComplexComponent } from '../components/ui/tabs/tabs-complex/tabs-complex.component';
import { TabsStepperComponent } from '../components/ui/tabs/tabs-stepper/tabs-stepper.component';
import { TabsStylesComponent } from '../components/ui/tabs/tabs-styles/tabs-styles.component';
import { TabsVerticalComponent } from '../components/ui/tabs/tabs-vertical/tabs-vertical.component';
import { TabsWithMoreComponent } from '../components/ui/tabs/tabs-with-more/tabs-with-more.component';
import { ComponentStructure } from './app.config';

export const tabsComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Tabs Basic',
    title: 'Tabs Basic',
    description: 'Tabs',
    url: 'https://taiga-ui.dev/navigation/tabs#basic',
    component: TabsBasicComponent,
  },
  {
    label: 'Tabs With More',
    title: 'Tabs With More',
    description: 'Tabs',
    url: 'https://taiga-ui.dev/navigation/tabs#more',
    component: TabsWithMoreComponent,
  },
  {
    label: 'Tabs Complex',
    title: 'Tabs Complex',
    description: 'Tabs',
    url: 'https://taiga-ui.dev/navigation/tabs#complex',
    component: TabsComplexComponent,
  },
  {
    label: 'Tabs Stepper',
    title: 'Tabs Stepper',
    description: 'Tabs',
    url: 'https://taiga-ui.dev/navigation/tabs#stepper',
    component: TabsStepperComponent,
  },
  {
    label: 'Tabs Closing',
    title: 'Tabs Closing',
    description: 'Tabs',
    url: 'https://taiga-ui.dev/navigation/tabs#closing',
    component: TabsClosingComponent,
  },
  {
    label: 'Tabs Vertical',
    title: 'Tabs Vertical',
    description: 'Tabs',
    url: 'https://taiga-ui.dev/navigation/tabs#vertical',
    component: TabsVerticalComponent,
  },
  {
    label: 'Tabs Active Index',
    title: 'Tabs Active Index',
    description: 'Tabs',
    url: 'https://taiga-ui.dev/navigation/tabs#active-index',
    component: TabsActiveIndexComponent,
  },
  {
    label: 'Tabs Styles',
    title: 'Tabs Styles',
    description: 'Tabs',
    url: 'https://taiga-ui.dev/navigation/tabs#styles',
    component: TabsStylesComponent,
  },
];
