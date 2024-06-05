import { Category, Search } from '../../main';

const SubNav = () => {
  return (
    <div className='w-full bg-gray-500 py-6 mt-5 hidden sm:flex lg:hidden'>
      <div className='custom-container flex items-center justify-between gap-8 text-white'>
        <Search />
        <Category />
      </div>
    </div>
  );
};
export default SubNav;
