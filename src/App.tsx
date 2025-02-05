import { RouterProvider } from 'react-router-dom';

import { Toast } from './components/index.ts';
import Providers from './Providers.tsx';
import router from './routes/index.ts';

function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
      <Toast />
    </Providers>
  );
}

export default App;
