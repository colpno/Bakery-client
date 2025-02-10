import { createBrowserRouter } from 'react-router-dom';

import { ROUTE_HOME } from '~/constants/routeConstants.ts';
import ErrorBoundary from './ErrorBoundary.tsx';
import Suspense from './Suspense.tsx';

const router = createBrowserRouter([
  {
    Component: Suspense,
    ErrorBoundary,
    children: [
      {
        path: ROUTE_HOME,
      },
    ],
  },
]);

export default router;
