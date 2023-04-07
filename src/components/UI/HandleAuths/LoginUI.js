import React from "react";
import { Link } from "react-router-dom";


const LoginUI=()=>{

    return(
        <form className="w-[100vw]">
            <div className="flex flex-col justify-center items-center  h-[400px]">
                <h3>Welcome!</h3>
                {/* Email */}
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" className="border-2 outline-none mt-1 block w-[300px] h-10 rounded-md  pl-2"/>
                </div>

                {/* password */}
                 <div>
                <label htmlFor="password" className="mt-2">Password:</label>
               
                <input id="password" type="password" className="border-2 outline-none mt-1 block w-[300px] h-10 rounded-md"/>
                <p className='flex  cursor-pointer'><Link to="/resetPassword" className="text-amber-400 ">Forget Password? </Link></p>
                </div>

                {/* Forget password */}
               
                <button type='submit' className='w-[300px] bg-amber-500 mt-2 text-white rounded-md text-2xl py-1'>Login</button>

                {/* Don't have account and Signup */}
                <p className='mt-3 '>Don't have an account?  <Link to="/signUp" className='text-amber-400 cursor-pointer'>Sign Up</Link></p>

            </div>

        </form>
    )
}

export default LoginUI;
