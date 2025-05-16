import { FullPreviewComponent } from '../components/ui/preview/full-preview/full-preview.component';
import { SimpleComponent } from '../components/ui/preview/simple/simple.component';
import { WithDirectiveComponent } from '../components/ui/preview/with-directive/with-directive.component';
import { WithLoadingUnavailableImageComponent } from '../components/ui/preview/with-loading-unavailable-image/with-loading-unavailable-image.component';
import { ComponentStructure } from './app.config';

export const previewComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Full Preview',
    title: 'Full Preview',
    description: 'Full preview',
    url: 'https://taiga-ui.dev/components/preview#full-preview',
    component: FullPreviewComponent,
  },
  {
    label: 'Preview with directive',
    title: 'Preview with directive',
    description: 'Preview with directive',
    url: 'https://taiga-ui.dev/components/preview#preview-with-directive',
    component: WithDirectiveComponent,
  },
  {
    label: 'Preview Simple',
    title: 'Preview Simple',
    description: 'Preview Simple',
    url: 'https://taiga-ui.dev/components/preview#simple-mode',
    component: SimpleComponent,
  },
  {
    label: 'Preview with loading',
    title: 'Preview with loading',
    description: 'Preview with loading and unavailable image',
    url: 'https://taiga-ui.dev/components/preview#with-loading-and-unavailable-image',
    component: WithLoadingUnavailableImageComponent,
  },
];
