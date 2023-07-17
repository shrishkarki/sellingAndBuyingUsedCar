import React from 'react';
import { useContext } from 'react';
import { IndexContent } from '../components/ContextApi/ContextApi';

import { db } from "../Firebase-config";
import {collection, addDoc} from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const userCollectionRef=collection(db,"sellingDetails");
  const {predictedPrice,carDetails}=useContext(IndexContent);
  const navigate=useNavigate();
  // console.log(typeof(predictedPrice))
  // console.log(carDetails);
  const actualPredictedPrice=parseFloat(predictedPrice+3);
  const finalPredict=(actualPredictedPrice).toFixed(2);
  console.log(predictedPrice,carDetails);

  const createCarDetails=async ()=>{
    await addDoc(userCollectionRef,{
      carModel:carDetails.carModel,
      carName:carDetails.carName,
      fuelType:carDetails.fuelType,
      kmsDriven:carDetails.kmsDriven,
      ownersNumber:carDetails.ownersNumber,
      phoneNumber:carDetails.phoneNumber,
      predictedPrice:finalPredict,
      province:carDetails.province,
      purchasedYear:carDetails.purchasedYear,
      showroomPrice:carDetails.showroomPrice,
      transmissionType:carDetails.transmissionType
    })
    navigate('/confirmation');
    
  }

  return (
    <div className='w-1/2 h-52 md:h-auto bg-gradient-to-r from-amber-700 to-slate-800  relative'>
    {/* <img src={LumbiniImage} alt="museum"  className="block w-full h-full  mix-blend-overlay" /> */}
{console.log("hello")}
    <div className=' w-full h-full flex flex-col justify-center items-center'>
    <p className='uppercase text-white text-6xl font-extrabold tracking-[2px]'>Carbage</p>
<p className='text-white px-12 text-justify  font-bold text-3xl tracking-[1px] '>Let's Sell Your Car.</p>

{predictedPrice && <div className='flex flex-col justify-center items-center'><p className='text-white px-12 text-justify mt-3 font-bold text-2xl tracking-[2px] '>You can sell your car at {finalPredict} Lakhs</p>

<p className='text-white px-12 text-justify  font-bold  tracking-[1px] '>If you are satisfy with this Predicted Price then you can proceed the process to get appointment in your nearest Carbage Branch for car inspection..</p>

<button className='px-4 py-2 bg-amber-600 text-2xl text-white hover:scale-105 ' onClick={createCarDetails}>Proceed</button></div>}



    </div>
    

    </div>
  );
}

export default Sidebar;