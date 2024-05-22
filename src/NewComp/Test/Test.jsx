import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "/Construction Site/my-app/src/Images/author-2.jpg";
import "./Test.css";
import bg from "/Construction Site/my-app/src/Images/bg-2.jpg";

const Test = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      title: "Manager",
      Image: image,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum felis a sapien consectetur efficitur.",
    },
    {
      id: 2,
      name: "Jane Smith",
      Image: image,
      message:
        "Pellentesque vel felis sit amet nibh tincidunt dignissim. Quisque varius enim sed massa gravida, nec ullamcorper enim lobortis.",
    },
    {
      id: 3,
      name: "Mike Johnson",
      Image: image,
      message:
        "Sed lacinia tellus a mi condimentum, at aliquet orci scelerisque. Vivamus eleifend nisl at mauris consectetur.",
    },
  ];

  const settings = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay:true,
    autoplaySpeed:900,
    slidesToScroll: 1,
    appendDots: (dots) => (
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ul style={{ margin: "0", padding: "0" }}>{dots}</ul>
        </div>
      ),
      customPaging: () => (
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "red", // Change the color of the dots here
            borderRadius: "50%",
            display: "inline-block",
            margin: "0 5px",
          }}
        ></div>
      ),
  };

  return (
    <div className="parent-container">
        <h2>Testimonials</h2>
      <Slider {...settings} className="swiper-container">
        {testimonials.map((testimonial) => (
          <div className="Test-box">
            <div className="testimonial-card" key={testimonial.id}>
              <img src={testimonial.Image} alt="" />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-message">{testimonial.message}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Test;
