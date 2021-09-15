
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
  }
];

export default routes;