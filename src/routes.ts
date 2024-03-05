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
    path: '/preview',
    component: lazy(() => import('./examples/imagePreview')),
  },
  {
    name: '流程',
    path: '/flow',
    component: lazy(() => import('./examples/flow')),
  },
  {
    name: 'Icon',
    path: '/icon',
    component: lazy(() => import('./examples/icon')),
  },
  {
    name: '菜单（menu）',
    path: '/menu',
    component: lazy(() => import('./examples/menu')),
  },
];

export default routes;
