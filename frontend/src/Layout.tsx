import { Outlet } from 'react-router-dom';
import { Navbar, SideNav } from './components/main';
import { Auth0Provider } from '@auth0/auth0-react';
import { useState } from 'react';

const Layout = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <Auth0Provider
      domain={import.meta.env.VITE_APP_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_APP_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <div className='bg-background text-color'>
        <Navbar
          isSideNavOpen={isSideNavOpen}
          setIsSideNavOpen={setIsSideNavOpen}
        />
        {isSideNavOpen && (
          <SideNav
            isSideNavOpen={isSideNavOpen}
            setIsSideNavOpen={setIsSideNavOpen}
          />
        )}
        <Outlet />
      </div>
    </Auth0Provider>
  );
};
export default Layout;
