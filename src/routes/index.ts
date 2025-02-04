import { createBrowserRouter } from 'react-router-dom';

import { ROUTE_HOME } from '~/constants/routeConstants.ts';

const router = createBrowserRouter([
  {
    path: ROUTE_HOME,
  },
]);

export default router;
