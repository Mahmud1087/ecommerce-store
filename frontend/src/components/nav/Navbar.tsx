import { AlignLeft } from 'lucide-react';
import { Account, Cart, Category, Help, Logo, Search, SubNav } from '../main';
import { NavProps } from '../../utils/types';

type NavbarProps = NavProps;

const Navbar = (props: NavbarProps) => {
  const { setIsSideNavOpen } = props;
  return (
    <nav className=' bg-nav_bg text-color/85 w-full pt-5 sm:pb-0 lg:pb-5'>
      <div className='custom-container flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <button
            title='menu-button'
            className='sm:hidden'
            onClick={() => setIsSideNavOpen(true)}
          >
            <AlignLeft strokeWidth={3} />
          </button>
          <Logo />
        </div>

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
