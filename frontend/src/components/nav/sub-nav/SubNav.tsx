import { Category, Search } from '../../main';

const SubNav = () => {
  return (
    <div className='w-full bg-dark_whine/90 py-4 mt-5 flex sm:py-6 lg:hidden'>
      <div className='custom-container flex items-center justify-between gap-8 text-white'>
        <Search />
        <section className='hidden sm:flex'>
          <Category />
        </section>
      </div>
    </div>
  );
};
export default SubNav;
