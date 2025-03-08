import { RouteObject } from 'react-router-dom';

import { ROUTE_HOME } from '~/constants/routeConstants.ts';
import { BasicLayout } from '~/layouts/index.ts';
import ColorsPage from '~/pages/ColorsPage.tsx';
import { HomePage } from '~/pages/index.ts';

const publicRoutes: RouteObject = {
  Component: BasicLayout,
  children: [
    {
      path: ROUTE_HOME,
      Component: HomePage,
    },
    {
      path: '/colors',
      Component: ColorsPage,
    },
  ],
};

export default publicRoutes;
