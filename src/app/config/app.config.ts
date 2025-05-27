import { Type } from '@angular/core';
import { actionbarComponents } from './actionbar-components.config';
import { alertComponents } from './alert-components.config';
import { avatarComponents } from './avatar-components.config';
import { badgeComponents } from './badge-components.config';
import { blockComponents } from './block-components.config';
import { breadcrumbComponents } from './breadcrumbs-components.config';
import { buttonComponents } from './button-components.config';
import { carouselComponents } from './carousel-components.config';
import { checkboxComponents } from './checkbox-components';
import { chipComponents } from './chip-components.config';
import { comboboxComponents } from './combobox-components.config';
import { errorComponents } from './error-components.config';
import { fadeComponents } from './fade-components.config';
import { groupComponents } from './group-components.config';
import { hintComponents } from './hint-components.config';
import { iconComponents } from './icon-components.config';
import { linkComponents } from './link-components.config';
import { loaderComponents } from './loader-components.config';
import { notificationComponents } from './notification-components.config';
import { paginationComponents } from './pagination-components.config';
import { previewComponents } from './preview-components.config';
import { ratingComponents } from './rating-components.config';
import { rippleComponents } from './ripple-components.config';
import { searchComponents } from './search-components.config';
import { segmentedComponents } from './segmented-components.config';
import { sensitiveComponents } from './sensitive-components.config';
import { skeletonComponents } from './skeleton-components.config';
import { sliderComponents } from './slider-components.config';
import { swipeActionsComponents } from './swipe-actions-components.config';
import { switchComponents } from './switch-components.config';
import { tabbarComponents } from './tabbar-components.config';
import { tabsComponents } from './tabs-component.config';
import { tilesComponents } from './tiles-components.config';
import { treeComponents } from './tree-component.config';
import { stepperComponents } from './stepper-components.config';

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
  carouselComponents,
  paginationComponents,
  tabsComponents,
  tabbarComponents,
  sliderComponents,
  groupComponents,
  checkboxComponents,
  comboboxComponents,
  treeComponents,
  rippleComponents,
  breadcrumbComponents,
  avatarComponents,
  skeletonComponents,
  segmentedComponents,
  sensitiveComponents,
  fadeComponents,
  actionbarComponents,
  swipeActionsComponents,
  previewComponents,
  stepperComponents,
  searchComponents,
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
