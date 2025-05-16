import { StepperAutoscrollComponent } from '../components/ui/stepper/stepper-autoscroll/stepper-autoscroll.component';
import { StepperBasicComponent } from '../components/ui/stepper/stepper-basic/stepper-basic.component';
import { StepperVerticalConnectedComponent } from '../components/ui/stepper/stepper-vertical-connected/stepper-vertical-connected.component';
import { StepperVerticalComponent } from '../components/ui/stepper/stepper-vertical/stepper-vertical.component';
import { ComponentStructure } from './app.config';

export const stepperComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Stepper',
    title: 'Stepper',
    description: 'Stepper',
    url: 'https://taiga-ui.dev/navigation/stepper#basic',
    component: StepperBasicComponent,
  },
  {
    label: 'Stepper vertical',
    title: 'Stepper vertical',
    description: 'Stepper vertical',
    url: 'https://taiga-ui.dev/navigation/stepper#vertical',
    component: StepperVerticalComponent,
  },
  {
    label: 'Stepper autoscroll',
    title: 'Stepper autoscroll',
    description: 'Stepper autoscroll',
    url: 'https://taiga-ui.dev/navigation/stepper#vertical-autoscroll',
    component: StepperAutoscrollComponent,
  },
  {
    label: 'Stepper Vertical connected',
    title: 'Stepper Vertical connected',
    description: 'Stepper Vertical connected',
    url: 'https://taiga-ui.dev/navigation/stepper#vertical-connected',
    component: StepperVerticalConnectedComponent,
  },
];
