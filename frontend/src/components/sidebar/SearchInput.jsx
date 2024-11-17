import React from 'react'
import { MdPersonSearch } from "react-icons/md";

const SearchInput = () => {
  return (
  <form className='flex items-center gap-2'>
    <input className='input input-bordered rounded-full  bg-gray-900' type='text' placeholder='search..'/>
    <button type='submit' className='btn btn-circle btn-sm w-11 h-11 text-white bg-gray-900'>
<MdPersonSearch className='w-6 h-6 outline-none'/>
    </button>
  </form>
  );
};

export default SearchInput;


//starter of file
// import React from 'react'
// import { MdPersonSearch } from "react-icons/md";

// const SearchInput = () => {
//   return (
//   <form className='flex items-center gap-2'>
//     <input className='input input-bordered rounded-full' type='text' placeholder='search..'/>
//     <button type='submit' className='btn btn-circle btn-sm w-11 h-11 text-white bg-gray-800'>
// <MdPersonSearch className='w-6 h-6 outline-none'/>
//     </button>
//   </form>
//   );
// };

// export default SearchInput;

