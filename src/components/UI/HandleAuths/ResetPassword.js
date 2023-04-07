import React from 'react';

function ResetPassword() {
  return (
    <form className='w-[100vw]'>
       <div className='flex flex-col items-center justify-center  h-[200px] '>
        <p className=' mb-3 font-bold text-2xl'>Please enter the email</p>
    <input type="text"  required className='border-2 border-amber-500 focus:outline-amber-400 text-base  block tmd:text-lg py-1 w-[310px] '   />
    {/* error message */}
    <p className='text-red-500 text-center'></p>
    <button type='submit' aria-label="search" className="mx-auto mt-1 focus:bg-amber-700 focus:ring-amber-700 focus:ring-2 focus:ring-offset-2 text-white bg-amber-600 hover:bg-amber-700  py-1 px-3 rounded w-auto relative text-lg lg:text-xl" >
      Submit
    </button>
    </div>
   
  </form>
  )
}

export default ResetPassword;