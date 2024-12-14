import { RatingBasicComponent } from '../components/ui/rating/rating-basic/rating-basic.component';
import { RatingCustomIconComponent } from '../components/ui/rating/rating-custom-icon/rating-custom-icon.component';
import { RatingStaticComponent } from '../components/ui/rating/rating-static/rating-static.component';
import { ComponentStructure } from './app.config';

export const ratingComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Rating Basic',
    title: 'Rating Basic',
    description: 'Rating',
    url: 'https://taiga-ui.dev/components/rating#basic',
    component: RatingBasicComponent,
  },
  {
    label: 'Rating Custom Icon',
    title: 'Rating Custom Icon',
    description: 'Rating',
    url: 'https://taiga-ui.dev/components/rating#custom-icons',
    component: RatingCustomIconComponent,
  },
  {
    label: 'Rating Static',
    title: 'Rating Static',
    description: 'Rating',
    url: 'https://taiga-ui.dev/components/rating#static',
    component: RatingStaticComponent,
  },
];
