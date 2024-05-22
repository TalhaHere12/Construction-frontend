import React from "react";
import bg from "/Construction Site/my-app/src/Images/bg-2.jpg";
import img1 from "/Construction Site/my-app/src/Images/img-1.jpg";
import img2 from "/Construction Site/my-app/src/Images/img-2.jpg";
import img3 from "/Construction Site/my-app/src/Images/img-3.jpg";
import "./Project.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Project() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleHover = (e) => {
    e.target.style.animationPlayState = "running"; // Play the animation on hover
  };

  // const handleMouseLeave = (e) => {
  //   e.target.style.animationPlayState = "paused"; // Pause the animation when the mouse leaves
  // };

  // const handleMouseLeave = (e) => {
  //   const element = e.target;
  
  //   // Reset the animation to its initial state by setting it to 'none'
  //   element.style.animation = 'none';
  //   element.offsetHeight;
  
  //   // After a short delay, re-enable the animation by setting it back to its original value
  //   setTimeout(() => {
  //     element.style.animation = '';
  //   }, 50); // Adjust the delay as needed, you can experiment with different values
  // };
  
  return (
    <div className="Project">
      <div className="bg-img">
        <img src={bg}></img>
        <p className="Project-title">Our Work</p>
        <p className="Project-heading">Explore our recent projects </p>

        <div className="button-grid">
          <button>View all Projects</button>
        </div>

        <div className="aos-anim" data-aos="fade-right" >
        <div className="project-grid3"  >
          <div
            className="container"
            onMouseEnter={handleHover}
            // onMouseLeave={handleMouseLeave}
          >
            <img src={img1} className="project-image3" />
            <div className="blank">
              <p className="first">Alpha Projects</p> <br />
              <p className="second">Construction of Projects</p>
            </div>
          </div>
        </div>

        <div className="project-grid3">
          <div
            className="container2"
            onMouseEnter={handleHover}
            // onMouseLeave={handleMouseLeave}
          >
            <img src={img2} className="project-image3" />
            <div className="blank">
              <p className="first">Alpha Projects</p> <br />
              <p className="second">Construction of Projects</p>
            </div>
          </div>
        </div>

        <div className="project-grid3">
          <div
            className="container3"
            onMouseEnter={handleHover}
            // onMouseLeave={handleMouseLeave}
          >
            <div className="attach"></div>
            <img src={img3} className="project-image3" />
            <div className="blank">
              <p className="first">Alpha Projects</p> <br />
              <p className="second">Construction of Projects</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
