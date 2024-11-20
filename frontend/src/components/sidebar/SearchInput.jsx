

import { useState } from "react";
import { MdPersonSearch } from "react-icons/md";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};
	return (
		<form onSubmit={handleSubmit} className='flex items-center gap-2'>
			<input
			className='input input-bordered rounded-full  bg-gray-900' type='text'
				placeholder='Search…'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button type='submit' className='btn btn-circle btn-sm w-11 h-11 text-white bg-gray-900'>
			<MdPersonSearch className='w-6 h-6 outline-none'/>
			</button>
		</form>
	);
};
export default SearchInput;

// STARTER CODE SNIPPET
// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
// 	return (
// 		<form className='flex items-center gap-2'>
// 			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
// 			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
// 				<IoSearchSharp className='w-6 h-6 outline-none' />
// 			</button>
// 		</form>
// 	);
// };
// export default SearchInput;






// import React from 'react'
// import { MdPersonSearch } from "react-icons/md";

// const SearchInput = () => {
//   return (
//   <form className='flex items-center gap-2'>
//     <input className='input input-bordered rounded-full  bg-gray-900' type='text' placeholder='search..'/>
//     <button type='submit' className='btn btn-circle btn-sm w-11 h-11 text-white bg-gray-900'>
// <MdPersonSearch className='w-6 h-6 outline-none'/>
//     </button>
//   </form>
//   );
// };

// export default SearchInput;


