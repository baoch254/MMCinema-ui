import React from 'react';

interface Props {
  placeholder : string,
  listToSearch: string[]
}

const SearchTextInput = ({placeholder, listToSearch} : Props) => {
  return (
    <div className="relative">
      <input type="text" placeholder= {placeholder}
             className="block h-9 w-full items-center justify-center rounded border border-gray-300 bg-white px-3 py-1"
             value="" />
      <button type="submit" aria-label="Search"
              className="absolute right-2 top-2 border-none opacity-50 outline-none">
        <img src='/search-icon.svg' alt='search-icon' className='size-5' />
      </button>
    </div>
  );
};

export default SearchTextInput;
