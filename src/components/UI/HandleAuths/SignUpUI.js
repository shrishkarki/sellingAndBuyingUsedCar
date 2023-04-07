import React from "react";

const SignUpUI=()=>{
return(
    <form className='w-[100vw]' >
    <div className='my-12 flex flex-col justify-start items-center h-auto'>
        <h3 className='text-amber-600 text-3xl tracking-[4px] font-extrabold w-full text-center'>Sign Up</h3>
        <p className='text-center my-4'>Already have an account ? <span className='text-amber-400 cursor-pointer' >Log in</span> </p>

        <div className='text-red-500 text-xs capitalize text-center'>
            
        </div>

        {/* email*/}

              <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" className="border-2 outline-none mt-1 block w-[300px] h-10 rounded-md  pl-2"/>
                </div>

                {/* username */}

                <div className="mt-2">
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="username" className="border-2 outline-none mt-1 block w-[300px] h-10 rounded-md  pl-2"/>
                </div>

                {/* Fullname */}
                <div className="mt-2">
                    <label htmlFor="fullname">Fullname:</label>
                    <input id="fullname" type="fullname" className="border-2 outline-none mt-1 block w-[300px] h-10 rounded-md  pl-2"/>
                </div>

                {/* create password */}
                <div className="mt-2">
                    <label htmlFor="password">Create Your Password:</label>
                    <input id="password" type="password" className="border-2 outline-none mt-1 block w-[300px] h-10 rounded-md  pl-2"/>
                </div>
                {/* address  */}
                <div className="mt-2">
                    <label htmlFor="address">Address:</label>
                    <input id="address" type="text" className="border-2 outline-none mt-1 block w-[300px] h-10 rounded-md  pl-2"/>
                </div>
                {/* mobile number */}
                <div className="mt-2">
                    <label htmlFor="mobile">Mobile Number:</label>
                    <input id="mobile" type="number" className="border-2 outline-none mt-1 block w-[300px] h-10 rounded-md  pl-2"/>
                </div>

                <button type='submit' className='w-[300px] bg-amber-500 my-4 text-white rounded-md text-2xl py-1' >Sign Up</button>

        </div>
</form>
);
}

 export default SignUpUI;