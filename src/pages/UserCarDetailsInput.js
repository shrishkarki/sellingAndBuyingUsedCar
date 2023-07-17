import React, { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { IndexContent } from '../components/ContextApi/ContextApi';


const UserCarDetailsInput = () => {
    const{setPredictedPrice,setCarDetails}=useContext(IndexContent);
    const [UserCarInfo, setUserCarInfo] = useState({
        carName: "",
        showroomPrice: "",
       
        purchasedYear: "",
        carModel: "",
        kmsDriven: "",
        province: "",
        phoneNumber: "",
        fuelType: "",
        ownersNumber: "",
        // dealer: "",
        transmissionType: "",
    });



    const carCompany = ['Maruti', 'Hyundai', 'TATA', 'HONDA', 'Renault', 'Mahindra', 'Volkswagan', 'Toyota', 'Ford', 'Datsun', 'Jeep', 'Thar', 'Kia', 'Nexon', 'Skoda', 'Nissan'];

    const province=['Lumbini Province','Gandaki Province','Koshi Province','Madhesh Province','Sudhurpaschim Province','Bagmati Province','Karnali Province'];

    const inputHandler = (e) => {
        const newFormData = { ...UserCarInfo };
        newFormData[e.target.id] = e.target.value;
        setUserCarInfo(newFormData);
    }


    const submitHandler=(e)=>{
        e.preventDefault();
        // console.log(UserCarInfo);
        const data={
            "Year":UserCarInfo.purchasedYear,
            "Present_Price":UserCarInfo.showroomPrice,
            "Kms_Driven":UserCarInfo.kmsDriven,
            "Owner":UserCarInfo.ownersNumber,
            "Fuel_Type_Petrol":UserCarInfo.fuelType,
            "Seller_Type_Individual":"Individual",
            "Transmission_Mannual":UserCarInfo.transmissionType
            }
            // console.log(data)

            axios({

                url: "http://127.0.0.1:5000/predict",
                method: 'POST',
    
                data
               
            }).then(response => {
                // setCarDetails(data);
                setPredictedPrice(response.data.price);
                console.log(UserCarInfo)
                setCarDetails(UserCarInfo)
              })
              .catch(error => {
                console.log(error);
              });

            
    }


    return (
        <div className='w-1/2'>


            <form className='flex flex-col justify-center  items-center' onSubmit={submitHandler}>
                {/* CarName */}

                <div className='tmd:text-2xl font-semibold mt-2'>
                    <select name="carName" id="carName" className=' block  py-1 text-lg tmd:text-2xl font-semibold border-2 border-solid border-black rounded-lg focus:outline-amber-500 w-[300px]' value={UserCarInfo.carName} required onChange={(e) => inputHandler(e)} autoFocus >

                        <option value="">SELECT COMPANY</option>

                        {carCompany.map((item, index) => (
                            <option value={item} key={index} required>{item}</option>
                        ))}

                    </select>
                </div>
                {/* car showroom price */}
                <div className='tmd:text-2xl font-semibold mt-3'>
                            <label htmlFor='showroomPrice' >SHOWROOM PRICE(In Lakhs)</label>
                            <input id="showroomPrice"type='number' className='border-2 outline-none  block  h-10 rounded-md border-black w-[300px]' value={UserCarInfo.showroomPrice} required onChange={(e) => inputHandler(e)} />
                </div>
                 {/* car model */}
                 <div className='tmd:text-2xl font-semibold mt-3'>
                            <label htmlFor='carModel'  className='uppercase'>Car Model</label>
                            <input id="carModel"type='text' className='border-2 outline-none mt-1 block  h-10 rounded-md border-black w-[300px]' value={UserCarInfo.carModel} required onChange={(e) => inputHandler(e)}/>
                </div>
                {/* purchasedYear */}
                <div className='tmd:text-2xl font-semibold mt-3'>
                            <label htmlFor='purchasedYear'  className='uppercase'>purchased Year</label>
                            <input id="purchasedYear" type='number' className='border-2 outline-none mt-1 block  h-10 rounded-md border-black w-[300px]' value={UserCarInfo.purchasedYear} required onChange={(e) => inputHandler(e)}/>
                </div>

                {/*  kmsDriven */}
                <div className='tmd:text-2xl font-semibold mt-3'>
                            <label htmlFor='kmsDriven'  className='uppercase'>KMs Driven</label>
                            <input id="kmsDriven" type='number' className='border-2 outline-none mt-1 block  h-10 rounded-md border-black w-[300px]' value={UserCarInfo.kmsDriven} required onChange={(e) => inputHandler(e)}/>
                </div>

                {/* Province */}
                <div className='tmd:text-2xl font-semibold mt-4'>
                    <select name="province" id="province" className=' block  py-1 text-lg tmd:text-2xl font-semibold border-2 border-solid border-black rounded-lg focus:outline-amber-500  h-10 w-[300px]' value={UserCarInfo.province} required onChange={(e) => inputHandler(e)} >

                        <option value="">SELECT YOUR PROVINCE</option>

                        {province.map((item, index) => (
                            <option value={item} key={index} required>{item}</option>
                        ))}

                    </select>
                </div>

                {/* phone number */}
                <div className='tmd:text-2xl font-semibold mt-3'>
                            <label htmlFor='phoneNumber'  className='uppercase'>phone Number</label>
                            <input id="phoneNumber" type='number' className='border-2 outline-none mt-1 block  h-10 rounded-md border-black w-[300px]' value={UserCarInfo.phoneNumber} required onChange={(e) => inputHandler(e)}/>
                </div>

                {/* fuel type */}
                <div className='tmd:text-2xl font-semibold mt-4'>
                    <select name="fuelType" id="fuelType" className=' block  py-1 text-lg tmd:text-2xl font-semibold border-2 border-solid border-black rounded-lg focus:outline-amber-500 h-10 w-[300px]' value={UserCarInfo.fuelType} required onChange={(e) => inputHandler(e)} >
                    <option value="">Fuel Type</option>
                        <option value="Petrol"  required selected>Petrol</option>
                        <option value="Diseal"  required>Diseal</option>
                    </select>
                </div>

                {/* ownersNumber */}

                <div className='tmd:text-2xl font-semibold mt-3'>
                            <label htmlFor='ownersNumber'  className='uppercase'>owners Number</label>
                            <input id="ownersNumber" type='number' className='border-2 outline-none  block  h-10 rounded-md border-black w-[300px]' value={UserCarInfo.ownersNumber} required onChange={(e) => inputHandler(e)}/>
                </div>

                {/* transmissionType */}
                <div className='tmd:text-2xl font-semibold mt-4'>
                    <select name="transmissionType" id="transmissionType" className=' block  py-1 text-lg tmd:text-2xl font-semibold border-2 border-solid border-black rounded-lg focus:outline-amber-500 h-10 w-[300px]' value={UserCarInfo.transmissionType} required onChange={(e) => inputHandler(e)} >
                            <option value="">Transmission Type</option>
                        <option value="Manual"  required>Manual</option>
                        <option value="Automatic"  required>Automatic</option>
                    </select>
                </div>

                <button type='submit' className='px-3 py-1 rounded-xl bg-orange-300 text-lg my-4'>Predict The Price</button>
               

            </form>
        </div>

    )
}

export default UserCarDetailsInput