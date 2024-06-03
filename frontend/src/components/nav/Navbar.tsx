import { Logo } from '../main';

const Navbar = () => {
  return (
    <nav className=' bg-nav_bg text-color/85 w-full py-4 '>
      <div className='container'>
        <Logo />
      </div>
    </nav>
  );
};
export default Navbar;
