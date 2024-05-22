//import { Box, Flex, HStack, Spacer, Text, VStack,Image } from "@chakra-ui/react";
import React from "react";
import house from "/Construction Site/my-app/src/Images/image-28.jpg";
import house2 from "/Construction Site/my-app/src/Images/image-27.jpg";
import house3 from "/Construction Site/my-app/src/Images/image-26.jpg";
import Slider from "react-slick";
import { Carousel } from "@trendyol-js/react-carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useRef } from "react";

// const Customtheme=extendTheme({
//   color:{
//     myCustomcolor:{
//       purple:"#F1F4FB"
//     },
//   },
// })

import "./Services.css";

function Services() {

  // const box=document.querySelector('.services-grid')
  // const nextbtn = () =>{
  //   const width=box.clientWidth;
  //   box.scrollLeft=box.scrollLeft-width;
  //   console.log(width)
  // }
  // const prevbtn = ()=>{
  //   const width=box.clientWidth;
  //   box.scrollLeft=box.scrollLeft+width;
  //   console.log(width);
  // }
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  // };


  // const sliderRef = useRef(null);

  // const nextbtn = () => {
  //   const width = sliderRef.current.clientWidth;
  //   sliderRef.current.scrollLeft += width;
  //   console.log(width);
  // };

  // const prevbtn = () => {
  //   const width = sliderRef.current.clientWidth;
  //   sliderRef.current.scrollLeft -= width;
  //   console.log(width);
  // };


  // const nextbtn = () => {
  //   const width = sliderRef.current?.clientWidth;
  //   if (width) {
  //     sliderRef.current.scrollLeft += width;
  //     console.log(width);
  //   }
  // };

  // const prevbtn = () => {
  //   const width = sliderRef.current?.clientWidth;
  //   if (width) {
  //     sliderRef.current.scrollLeft -= width;
  //     console.log(width);
  //   }
  // };


  // const nextbtn = () => {
  //   try {
  //     const width = sliderRef.current?.clientWidth;
  //     if (width) {
  //       sliderRef.current.scrollLeft += width;
  //       console.log(width);
  //     }
  //   } catch (error) {
  //     console.error("Error in nextbtn:", error);
  //   }
  // };


  // const prevbtn = () => {
  //   try {
  //     const width = sliderRef.current?.clientWidth;
  //     if (width) {
  //       sliderRef.current.scrollLeft -= width;
  //       console.log(width);
  //     }
  //   } catch (error) {
  //     console.error("Error in prevbtn:", error);
  //   }
  // };
  return (
    <div className="services-container">
      <div className="header-container">
        <h2 className="section-title">What we do</h2>
        <h1 className="services-title">Our Services That We Provide</h1>
        <p className="services-description">
          If you need to repair or replace your Plumbing system, call today and
          talk to one of our Plumbing specialists. They’ll answer all your
          questions and arrange an appointment at your convenience.
        </p>
      </div>

      {/* <button  className="prev-btn" onClick={prevbtn} >
        <FiChevronLeft></FiChevronLeft>
      </button>
      <button className="next-btn" onClick={nextbtn} >
        <FiChevronRight></FiChevronRight>
      </button> */}
      {/* <button onClick={nextbtn} ><FiChevronRight></FiChevronRight></button> */}
      <div className="services-grid">
        <div className="service-box">
          <img src={house} alt="House" />
          <div className="service-img"></div>
        </div>

        <div className="service-box">
          <img src={house3} alt="House" />
          <div className="service-img"></div>
        </div>

        <div className="service-box">
          <img src={house2} alt="House" />
          <div className="service-img"></div>
        </div>

        <div className="service-box">
          <img src={house2} alt="House" />
          <div className="service-img"></div>
        </div>

        <div className="service-box">
          <img src={house2} alt="House" />
          <div className="service-img"></div>
        </div>
      </div>
    </div>
  );
}

export default Services;
