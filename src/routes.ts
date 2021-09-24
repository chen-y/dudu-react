
import { lazy } from 'react';
import { RouteProps } from 'react-router';

interface Route extends RouteProps {
  name: string;
}

const routes: Route[] = [
  {
    name: '按钮',
    path: '/button',
    component: lazy(() => import('./examples/button')),
  },
  {
    name: '栅格',
    path: '/grid',
    component: lazy(() => import('./examples/Row')),
  },
  {
    name: '滚动容器',
    path: '/scroll',
    component: lazy(() => import('./examples/scroll')),
  },
  {
    name: '图片预览',
    path: '/perview',
    component: lazy(() => import('./examples/imagePerview')),
  },
  {
    name: 'tab',
    path: '/tabs',
    component: lazy(() => import('./examples/tabs')),
  },
  {
    name: 'tree',
    path: '/tree',
    component: lazy(() => import('./examples/tree')),
  }
];

export default routes;
