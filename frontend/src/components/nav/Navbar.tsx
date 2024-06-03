import { Account, Cart, Category, Help, Logo, Search } from '../main';

const Navbar = () => {
  return (
    <nav className=' bg-nav_bg text-color/85 w-full py-5 '>
      <div className='container flex justify-between items-center'>
        <Logo />
        <section className='flex items-center gap-8'>
          <Search />
          <Category />
          <Account />
          <Help />
          <Cart />
        </section>
      </div>
    </nav>
  );
};
export default Navbar;
