import React from "react";
import "./Header.css"; // Create a separate CSS file for styling
// import { IconName } from "react-icons/ai";
// import {AiOutlineMenu} from 'react-icons'
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BGimage from "/Construction Site/my-app/src/Images/banner-1.jpg";
import BGimage2 from "/Construction Site/my-app/src/Images/house.png";
import person from "/Construction Site/my-app/src/Images/image-1.png";
import logo from "/Construction Site/my-app/src/Images/Build.png";
// import { IconName } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";


const Header = () => {
  const [scrollPercentage,setScrollPercentage]=useState(0);

  const handlescroll=()=>{
    const scrollTop=window.scrollY;
    const windowHeight=window.innerHeight;
    const documentHeight=document.documentElement.scrollHeight;

    const currentScrollPercentage=(scrollTop/(documentHeight-windowHeight))*100;
    setScrollPercentage(currentScrollPercentage);
  }

  useEffect (()=>{
    window.addEventListener('scroll',handlescroll);
    return()=>{
      window.removeEventListener('scroll',handlescroll)
    }
  })

 
  return (
    <div className="header-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${BGimage})` }}
      >
        <img src={logo} className="logo-image" alt="" />
        <img src={BGimage2} className="bg-image2" alt="" />
        <img src={person} className="person-image" alt="" style={{transform: `translateX(-${scrollPercentage}%)`}} />

        <div className="home-details">
          <p className="title">VISION IN</p>
          <div className="heading-details">
            <p className="heading">BUIL</p>
            <p className="heading-2">DING</p>
          </div>
          <p className="description" >
            The point of using Lorem Ipsum is that it <br /> has a more-or-less normal
            distribution of <br /> letters, as opposed to using content here <br /> normal
            distribution
          </p>
          <div className="discover">
            <p>Discover More</p>
          </div>
        </div>

        <div className="nav-links">
          <ul>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/services">services</Link>
            </li>
            {/* <li>
              <Link to="/about">About</Link>
            </li> */}
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <FontAwesomeIcon icon="fa-solid fa-bars" />
          <button>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
