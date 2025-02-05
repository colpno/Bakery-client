import { HelmetProvider } from 'react-helmet-async';

import './configs/momentConf.ts';

function App() {
  return (
    <HelmetProvider>
      <h1>Bakery</h1>
    </HelmetProvider>
  );
}

export default App;
