import React from 'react'

const SearchBar = () => {
  return (
    <div>
        <input type="text" placeholder='Search movies,actors,genres..' className='rounded-sm bg-black py-2 px-2 placeholder:text-neutral-400 w-200'  />
    </div>
  )
}

export default SearchBar