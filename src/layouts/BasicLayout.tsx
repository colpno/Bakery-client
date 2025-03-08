import { Outlet } from 'react-router-dom';

import { Footer, Header } from '~/components/index.ts';

function BasicLayout() {
  return (
    <div className="bg-primary-1">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default BasicLayout;
