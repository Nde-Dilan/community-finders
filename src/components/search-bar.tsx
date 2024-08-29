import React from 'react'

const SearchBar = () => {
  return (
    <form action="/">
    <div className="relative border-2 border-gray-100 mb-9 rounded-lg">
        <div className="absolute top-4 left-3">
            <i
                className="fa fa-search text-black dark:text-white z-20 hover:text-gray-500"
            ></i>
        </div>
        <input
            type="text"
            name="search"
            className="h-14 w-full pl-5 pr-9 rounded-lg z-0 focus:shadow focus:outline-none"
            placeholder="Search For Communities..."
        />
        <div className="absolute top-2 right-2">
            <button
                type="submit"
                className="h-10 w-20  rounded-lg bg-black text-white dark:text-black dark:bg-white dark:border  hover:bg-red-600"
            >
                Search
            </button>
        </div>
    </div>
</form>
  )
}

export default SearchBar;