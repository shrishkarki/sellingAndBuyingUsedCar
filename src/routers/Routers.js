import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Login from "../components/UI/HandleAuths/LoginUI";
import SignUp from "../components/UI/HandleAuths/SignUpUI";
import ResetPassword from "../components/UI/HandleAuths/ResetPassword";
import OtpHandle from "../components/UI/HandleAuths/OtpHandle";
import SellMyCar from "../pages/SellMyCar";
import Confirmation from "../pages/Confirmation";



const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sellMyCar" element={<SellMyCar/>} />
      <Route path="/confirmation" element={<Confirmation/>} />
     
      <Route path="/login" element={<Login/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/signUp/OtpHandle" element={<OtpHandle/>} />
      <Route path="/resetPassword" element={<ResetPassword/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
