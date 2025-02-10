import { RouterProvider } from 'react-router-dom';

import Providers from './Providers.tsx';
import router from './routes/index.ts';
import ThemeSetter from './ThemeSetter.tsx';
import Toast from './Toast.tsx';

function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
      <Toast />
      <ThemeSetter />
    </Providers>
  );
}

export default App;
