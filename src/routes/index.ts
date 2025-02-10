import { createBrowserRouter } from 'react-router-dom';

import { ROUTE_HOME } from '~/constants/routeConstants.ts';
import ErrorBoundary from './ErrorBoundary.tsx';

const router = createBrowserRouter([
  {
    ErrorBoundary,
    path: ROUTE_HOME,
  },
]);

export default router;
