import React, { useEffect, useState } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";
import { db } from "../../Firebase-config";
import {collection,  getDocs} from "firebase/firestore";

const CarItem = (props) => {
  const [details,setDetails]=useState("");
  const { imgUrl } = props.item;
  // const {  carName } = props.item;

  const userCollectionRef=collection(db,"sellingDetails");
  // console.log(details);

  useEffect(()=>{
    const getDetails=async ()=>{
      const data=await getDocs(userCollectionRef);
      setDetails(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    };

    getDetails();

    }
  ,[])

  return (
    <>
    {details && details.map((eachItem)=>{

console.log(details);
     return(<Col lg="4" md="4" sm="6" className="mb-5 " >
        {/* {console.log(eachItem.carName)} */}
      <div className="car__item ">
        <div className="car__img w-[300px] h-[200px]" >
          <img src={imgUrl} alt="" className="w-100 h-100 " />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center text-black">{eachItem.carName}</h4>
          <h6 className="rent__price text-center mt-">
            ${eachItem.predictedPrice} Lakhs <span></span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {eachItem.carModel}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {eachItem.transmissionType}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> 200
            </span>
          </div>

          {/* <button className=" w-50 car__item-btn car__btn-rent">
            <Link to={`/cars/${carName}`}>BUY</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${carName}`}>Details</Link>
          </button> */}
        </div>
      </div>
    </Col>)

    })}
    </>
  );
};

export default CarItem;
