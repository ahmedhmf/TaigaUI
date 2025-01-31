import { Type } from '@angular/core';
import { alertComponents } from './alert-components.config';
import { badgeComponents } from './badge-components.config';
import { blockComponents } from './block-components.config';
import { buttonComponents } from './button-components.config';
import { chipComponents } from './chip-components.config';
import { errorComponents } from './error-components.config';
import { hintComponents } from './hint-components.config';
import { iconComponents } from './icon-components.config';
import { linkComponents } from './link-components.config';
import { loaderComponents } from './loader-components.config';
import { notificationComponents } from './notification-components.config';
import { tilesComponents } from './tiles-components.config';
import { ratingComponents } from './rating-components.config';
import { switchComponents } from './switch-components.config';

export type ComponentStructure = {
  id: number;
  label: string;
  title: string;
  description: string;
  url: string;
  component: Type<unknown>;
};

const components: Omit<ComponentStructure, 'id'>[] = [
  buttonComponents,
  linkComponents,
  errorComponents,
  iconComponents,
  badgeComponents,
  chipComponents,
  loaderComponents,
  notificationComponents,
  hintComponents,
  alertComponents,
  blockComponents,
  tilesComponents,
  ratingComponents,
  switchComponents,
]
  .reduce((acc, curr) => [...acc, ...curr], [])
  .sort((a, b) => a.title.localeCompare(b.title));

// compute id to avoid error
const componentsWithIds: ComponentStructure[] = components.map((c, idx) => ({
  ...c,
  id: idx + 1,
}));

export const AppConfig = {
  components: componentsWithIds,
  componentTypeFilter: {
    label: 'Component type',
    placeHolder: 'Component type',
    items: componentsWithIds.map(({ id, label }) => ({ id, label })),
  },
};
