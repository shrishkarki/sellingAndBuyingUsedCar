import React, { useContext, useEffect, useState } from 'react';
import { IndexContent } from '../../ContextApi/ContextApi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OtpHandle = () => {
    const {emailAddress}=useContext(IndexContent);
    const [otp,setOtp]=useState("");
    const [otpStatus , setOtpStatus]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        if(!emailAddress){
            navigate('/signUp');
        }
    },[]);


    const submitHandler=(e)=>{
        e.preventDefault();
        const fd=new FormData();
        fd.append("email",emailAddress);
        fd.append("otp",otp);

        axios({
            url:"http://127.0.0.1:8000//accounts/verify-register-otp/",
            method:"POST",
            data:fd
        }).then(res=>{
            console.log(res.data)
            navigate('/')
        }).catch(err=>{
            setOtpStatus(err.response.data);
        })
    }
  return (
    <div className='w-full h-[50vh] flex flex-col items-center justify-center text-lg text-center'>

    <p >Please enter otp to verify your account</p>
    <p className='my-4'>An otp has sent to <span className='text-amber-500 font-bold '>{emailAddress}</span></p>
 
  <form onSubmit={submitHandler} className="">
  <input type="number" onChange={(e)=>setOtp(e.target.value)} required className='border-2 border-amber-500 focus:outline-amber-400' onFocus={()=>setOtpStatus("")}/>
  <p className='text-red-500 text-center'>{otpStatus.error}</p>
  <button type='submit'  aria-label="search" className="mx-auto mt-4 flex justify-center focus:bg-amber-700 focus:ring-amber-700 focus:ring-2 focus:ring-offset-2 text-white bg-amber-600 hover:bg-amber-700  py-1 px-3 rounded w-full sm:w-auto relative text-lg lg:text-xl" >
                 Verify
                </button>
  </form>
  
  </div>
  )
}

export default OtpHandle