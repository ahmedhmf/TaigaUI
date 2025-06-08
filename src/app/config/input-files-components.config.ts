import { InputBasicComponent } from '../components/ui/input-files/input-basic/input-basic.component';
import { InputCameraComponent } from '../components/ui/input-files/input-camera/input-camera.component';
import { InputCustomContentComponent } from '../components/ui/input-files/input-custom-content/input-custom-content.component';
import { InputMultipleComponent } from '../components/ui/input-files/input-multiple/input-multiple.component';
import { InputNgModelComponent } from '../components/ui/input-files/input-ng-model/input-ng-model.component';
import { InputStandaloneComponent } from '../components/ui/input-files/input-standalone/input-standalone.component';
import { InputWithButtoComponent } from '../components/ui/input-files/input-with-butto/input-with-butto.component';
import { ComponentStructure } from './app.config';

export const inputFilesComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Input Files Basic',
    title: 'Input Files Basic',
    description: 'Input Files Basic Single',
    url: 'https://taiga-ui.dev/components/input-files#single',
    component: InputBasicComponent,
  },
  {
    label: 'Input Files Multiple',
    title: 'Input Files Multiple',
    description: 'Input Files Multiple',
    url: 'https://taiga-ui.dev/components/input-files#multiple',
    component: InputMultipleComponent,
  },
  {
    label: 'Input Files Standalone',
    title: 'Input Files Standalone',
    description: 'Input Files Standalone',
    url: 'https://taiga-ui.dev/components/input-files#standalone-files',
    component: InputStandaloneComponent,
  },
  {
    label: 'Input Files with Button',
    title: 'Input Files with Button',
    description: 'Input Files with Button',
    url: 'https://taiga-ui.dev/components/input-files#with-button',
    component: InputWithButtoComponent,
  },
  {
    label: 'Input Files Custom',
    title: 'Input Files Custom',
    description: 'Input Files Custom',
    url: 'https://taiga-ui.dev/components/input-files#custom',
    component: InputCustomContentComponent,
  },
  {
    label: 'Input Files Camera',
    title: 'Input Files Camera',
    description: 'Input Files Camera',
    url: 'https://taiga-ui.dev/components/input-files#front-camera',
    component: InputCameraComponent,
  },
  {
    label: 'Input Files NgModel',
    title: 'Input Files NgModel',
    description: 'Input Files NgModel',
    url: 'https://taiga-ui.dev/components/input-files#model',
    component: InputNgModelComponent,
  },
];
