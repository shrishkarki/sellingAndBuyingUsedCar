import React, { useEffect } from 'react';
import UserCarDetailsInput from './UserCarDetailsInput';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
const SellMyCar = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate('/login');
    }
  })
  return (
    <div className='w-full'>
      <h1 className='text-xl tmd:text-3xl font-extrabold text-center py-2'>First Predict the Price of your Car and then you can Sell it.</h1>
      <div className='w-full border-b-2 border-grey-500 my-2'></div>
      <div className='flex'>
      <Sidebar/>
      <UserCarDetailsInput />
      </div>
      
    </div>
  )
}

export default SellMyCar;