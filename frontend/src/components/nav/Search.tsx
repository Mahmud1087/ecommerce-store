import { SearchIcon } from 'lucide-react';

const Search = () => {
  return (
    <form className='flex items-center gap-2'>
      <label
        htmlFor='search'
        className='border border-black/25 rounded-full py-2 px-3 w-[24rem] flex items-center gap-5'
      >
        <SearchIcon size={20} />
        <input
          type='search'
          name='search'
          id='search'
          placeholder='Search product . . . '
          className=' outline-none w-full '
        />
      </label>
      <button
        title='search-button'
        type='submit'
        className=' bg-orange-400 py-2 px-5 rounded-md text-white'
      >
        Search
      </button>
    </form>
  );
};
export default Search;
