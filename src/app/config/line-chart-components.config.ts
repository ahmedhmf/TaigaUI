import { Dotted } from '../components/ui/line-chart/dotted/dotted';
import { Hint } from '../components/ui/line-chart/hint/hint';
import { Line } from '../components/ui/line-chart/line/line';
import { SeveralLinesHints } from '../components/ui/line-chart/several-lines-hints/several-lines-hints';
import { Smooth } from '../components/ui/line-chart/smooth/smooth';
import { ComponentStructure } from './app.config';

export const lineChartComponents: Omit<ComponentStructure, 'id'>[] = [
  {
    label: 'Line Chart',
    title: 'Line Chart',
    description: 'Line Chart',
    url: 'https://taiga-ui.dev/charts/line-chart#line',
    component: Line,
  },
  {
    label: 'Line Chart Smooth',
    title: 'Line Chart Smooth',
    description: 'Line Chart Smooth',
    url: 'https://taiga-ui.dev/charts/line-chart#smooth',
    component: Smooth,
  },
  {
    label: 'Line Chart Dotted',
    title: 'Line Chart Dotted',
    description: 'Line Chart Dotted',
    url: 'https://taiga-ui.dev/charts/line-chart#dotted',
    component: Dotted,
  },
  {
    label: 'Line Chart Hint',
    title: 'Line Chart Hint',
    description: 'Line Chart Hint',
    url: 'https://taiga-ui.dev/charts/line-chart#hint',
    component: Hint,
  },
  {
    label: 'Line Chart Multiple Lines',
    title: 'Line Chart Multiple Lines',
    description: 'Line Chart Multiple Lines',
    url: 'https://taiga-ui.dev/charts/line-chart#several-lines-with-hints',
    component: SeveralLinesHints,
  },
];
