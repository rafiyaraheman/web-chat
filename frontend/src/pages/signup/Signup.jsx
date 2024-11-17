import React from 'react'
import GenderCheckbox from './GenderCheckbox.jsx';

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 bg-brown-600 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border-gray-100'>
<h1 className='text-3xl font-semibold text-center text-white'>
    Sign up <span className='text-blue-950'> HEARTBEAT</span>
</h1>
<form>
    <div>
    <label className='label p-2'>
            <span className='text-base label-text'>Full name</span>
        </label>
        <input type='text' placeholder='full name' className='w-full input input-bordered h-10' />
    </div>
    <div>
    <label className='label p-2'>
            <span className='text-base label-text'>Username</span>
        </label>
        <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
    </div>
    <div>
    <label className='label p-2'>
            <span className='text-base label-text'>Password</span>
        </label>
        <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10' />
    </div>
    <div>
    <label className='label p-2'>
            <span className='text-base label-text'>Confirm Password</span>
        </label>
        <input type='password' placeholder='Enter confirm password' className='w-full input input-bordered h-10' />
    </div>
    <GenderCheckbox/>

    <a href='a' className='text-sm hover:uppercase hover:text-blue-600 mt-2 inline-block'>
        Already have an account?
    </a>
<div>
    <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
</div>

</form>
      </div>
    </div>
  )
}

export default Signup;

//starter code for sign up component

// import React from 'react'
// import GenderCheckbox from './GenderCheckbox.jsx';

// const Signup = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 bg-brown-600 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border-gray-100'>
// <h1 className='text-3xl font-semibold text-center text-white'>
//     Sign up <span className='text-blue-950'> HEARTBEAT</span>
// </h1>
// <form>
//     <div>
//     <label className='label p-2'>
//             <span className='text-base label-text'>Full name</span>
//         </label>
//         <input type='text' placeholder='full name' className='w-full input input-bordered h-10' />
//     </div>
//     <div>
//     <label className='label p-2'>
//             <span className='text-base label-text'>Username</span>
//         </label>
//         <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
//     </div>
//     <div>
//     <label className='label p-2'>
//             <span className='text-base label-text'>Password</span>
//         </label>
//         <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10' />
//     </div>
//     <div>
//     <label className='label p-2'>
//             <span className='text-base label-text'>Confirm Password</span>
//         </label>
//         <input type='password' placeholder='Enter confirm password' className='w-full input input-bordered h-10' />
//     </div>
//     <GenderCheckbox/>

//     <a href='a' className='text-sm hover:uppercase hover:text-blue-600 mt-2 inline-block'>
//         Already have an account?
//     </a>
// <div>
//     <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
// </div>

// </form>
//       </div>
//     </div>
//   )
// }

// export default Signup;

