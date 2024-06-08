import { X } from 'lucide-react';
import { NavProps } from '../../utils/types';
import { Logo } from '../main';

type SideNavProps = NavProps;

const SideNav = (props: SideNavProps) => {
  const { setIsSideNavOpen } = props;

  return (
    <nav className='fixed top-0 left-0 z-10 w-full bg-black/60 h-screen sm:hidden'>
      <section className='fixed top-0 left-0 z-20 w-4/5 bg-white h-screen py-5 px-4'>
        <div className='flex items-center justify-between'>
          <Logo />
          <button
            title='close-button'
            className='text-red-600'
            onClick={() => setIsSideNavOpen(false)}
          >
            <X strokeWidth={3} />
          </button>
        </div>
      </section>
    </nav>
  );
};
export default SideNav;
