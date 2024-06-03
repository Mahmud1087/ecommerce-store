import { Outlet } from 'react-router-dom';
import { Navbar } from './components/main';

const Layout = () => {
  return (
    <div className='sm:flex bg-background text-color'>
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Layout;
