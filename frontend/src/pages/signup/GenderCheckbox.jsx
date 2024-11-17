

const GenderCheckbox = () => {
  return (
    <div className='flex'>
      <div className='form-control'>
<label className={`label gap-2 cursor-pointer`}>
    <span className='label-text'>Male</span>
    <input type='checkbox' className="checkbox border-gray-300"/>
</label>
      </div>
      <div className='form-control'>
      <label className={`label gap-2 cursor-pointer`}>
    <span className='label-text'>Female</span>
    <input type='checkbox' className='checkbox border-gray-300'/>
    </label>
      </div>
      <div>
      <label className={`label gap-2 cursor-pointer`}>
    <span className='label-text'>Other</span>
    <input type='checkbox' className='checkbox border-gray-300'/>
    </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;

//starter of this file

// const GenderCheckbox = () => {
//     return (
//       <div className='flex'>
//         <div className='form-control'>
//   <label className={`label gap-2 cursor-pointer`}>
//       <span className='label-text'>Male</span>
//       <input type='checkbox' className="checkbox border-gray-300"/>
//   </label>
//         </div>
//         <div className='form-control'>
//         <label className={`label gap-2 cursor-pointer`}>
//       <span className='label-text'>Female</span>
//       <input type='checkbox' className='checkbox border-gray-300'/>
//       </label>
//         </div>
//         <div>
//         <label className={`label gap-2 cursor-pointer`}>
//       <span className='label-text'>Other</span>
//       <input type='checkbox' className='checkbox border-gray-300'/>
//       </label>
//         </div>
//       </div>
//     );
//   };
  
//   export default GenderCheckbox;
