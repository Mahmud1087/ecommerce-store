import { SearchIcon } from 'lucide-react';

const Search = () => {
  return (
    <form className='flex items-center'>
      <label
        htmlFor='search'
        className='border border-black/25 border-r-0 py-2 px-4 w-[20rem] flex items-center gap-5 bg-search_bg rounded-l-lg'
      >
        <SearchIcon size={20} className=' text-color' />
        <input
          type='search'
          name='search'
          id='search'
          placeholder='Search product . . . '
          className=' outline-none w-full bg-transparent text-color placeholder:text-color'
        />
      </label>
      <button
        title='search-button'
        type='submit'
        className=' bg-orange-400 border border-orange-400 py-2 px-4  text-white font-medium tracking-wider rounded-r-lg'
      >
        Search
      </button>
    </form>
  );
};
export default Search;
