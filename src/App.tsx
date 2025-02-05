import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

import './configs/momentConf.ts';
import router from './routes/index.ts';

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
