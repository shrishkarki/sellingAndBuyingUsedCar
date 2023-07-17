import React, { useContext, useEffect, useRef, useState } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import { IndexContent } from "../ContextApi/ContextApi";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Buy a Car",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/sellMyCar",
    display: "Sell my Car",
  },

  // {
  //   path: "/blogs",
  //   display: "Blog",
  // },
  
];

const Header = () => {
  const {localStorageValue,setLocalStorageValue}=useContext(IndexContent);
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  useEffect(()=>{
    if(localStorage.getItem("token")){
      setLocalStorageValue("token")
      // alert(`Welcome to Carbage ${localStorage.getItem("username")}`)
    }
  },[localStorageValue]);


  function clearSetValue() {
   setLocalStorageValue("")
  }


  function clearLocalStorageValue() {
    window.location.reload();
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    
  }

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> +977 98012345678
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                {!localStorageValue?<Link to="Login" className=" d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line"></i> Login
                </Link>:<Link to="/"  className=" d-flex align-items-center gap-1 cursor-pointer" onClick={()=>{clearSetValue(); clearLocalStorageValue();}}>
                  <i class="ri-login-circle-line"></i> Logout
                </Link>}

                {!localStorageValue && <Link to="signUp" className=" d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i> Register
                </Link>}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            {/* <Col lg="4" md="3" sm="4"> */}
            {/* <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex  align-items-center gap-2">
                    <i class="ri-car-line"></i>
                   
                      
                      Carbage
                      
                  </Link>
                </h1>
              </div> */}
            {/* </Col> */}
            <Col
              lg="4"
              md="3"
              sm="4"
              className=" d-flex align-items-center justify-content-center logo"
            >
              <h1>
                <Link to="/home" className=" d-flex  align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  Carbage
                </Link>
              </h1>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Nepal</h4>
                  <h6>Butwal City, Nepal</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
