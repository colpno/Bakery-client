import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

import './configs/momentConf.ts';
import queryClient from './configs/reactQueryConf.ts';
import router from './routes/index.ts';

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
