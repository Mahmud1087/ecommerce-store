import { Logo, Search } from '../main';

const Navbar = () => {
  return (
    <nav className=' bg-nav_bg text-color/85 w-full py-4 '>
      <div className='container flex justify-between items-center'>
        <Logo />
        <Search />
      </div>
    </nav>
  );
};
export default Navbar;
