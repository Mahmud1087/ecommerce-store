import { Menu } from 'lucide-react';
import { Account, Cart, Category, Help, Logo, Search, SubNav } from '../main';

const Navbar = () => {
  return (
    <nav className=' bg-nav_bg text-color/85 w-full pt-5 pb-5 sm:pb-0 '>
      <div className='custom-container flex justify-between items-center'>
        <div className='sm:hidden'>
          <Menu />
        </div>
        <Logo />
        <section className='hidden sm:flex items-center gap-8'>
          <div className='hidden items-center gap-8 lg:flex'>
            <Search />
            <Category />
          </div>
          <Account />
          <Help />
          <Cart />
        </section>
        <div className='sm:hidden'>
          <Cart />
        </div>
      </div>

      <SubNav />
    </nav>
  );
};
export default Navbar;
