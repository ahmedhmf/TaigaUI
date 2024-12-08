import { LoaderBackgroundComponent } from '../components/ui/loader/loader-background/loader-background.component';
import { LoaderCustomWidthComponent } from '../components/ui/loader/loader-custom-width/loader-custom-width.component';
import { LoaderOptionsComponent } from '../components/ui/loader/loader-options/loader-options.component';
import { LoaderOverlayComponent } from '../components/ui/loader/loader-overlay/loader-overlay.component';
import { LoadingButtonComponent } from '../components/ui/loader/loading-button/loading-button.component';
import { ComponentStructure } from './app.config';

export const loaderComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Loader Button',
    title: 'Loader',
    description: 'Loading Button',
    url: 'https://taiga-ui.dev/components/loader#button',
    component: LoadingButtonComponent,
  },
  {
    label: 'Loader Background',
    title: 'Loader Background',
    description: 'Loader with inherited background color',
    url: 'https://taiga-ui.dev/components/loader#inherit-color',
    component: LoaderBackgroundComponent,
  },
  {
    label: 'Loader With Content Overlay',
    title: 'Loader With Content Overlay',
    description: 'User can set content as overlay',
    url: 'https://taiga-ui.dev/components/loader#overlay',
    component: LoaderOverlayComponent,
  },
  {
    label: 'Loader Options',
    title: 'Loader Options',
    description: 'Options',
    url: 'https://taiga-ui.dev/components/loader#options',
    component: LoaderOptionsComponent,
  },
  {
    label: 'Loader Custom Width',
    title: 'Loader Custom Width',
    description: 'User can customize stroke width',
    url: 'https://taiga-ui.dev/components/loader#stroke-width',
    component: LoaderCustomWidthComponent,
  },
];
