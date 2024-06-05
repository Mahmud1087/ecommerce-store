import { Outlet } from 'react-router-dom';
import { Navbar } from './components/main';
import { Auth0Provider } from '@auth0/auth0-react';

const Layout = () => {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_APP_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_APP_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <div className='bg-background text-color'>
        <Navbar />
        <Outlet />
      </div>
    </Auth0Provider>
  );
};
export default Layout;
