import { useState, useEffect } from "react";
import React from "react";
import Bridge from "/Construction Site/my-app/src/Images/bg-1.jpg";
import "./Key.css";
import building from "/Construction Site/my-app/src/Images/image-2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function Key() {
  const [filled, setFilled] = useState(0);

  useEffect(() => {
    const increment = 2;
    const duration = 100;
    const targetProgress = 80;

    var animateProgressBar = () => {
      if (filled < targetProgress) {
        setFilled((prevFilled) => {
          const newFilled = prevFilled + increment;
          return newFilled > targetProgress ? targetProgress : newFilled;
        });
        setTimeout(animateProgressBar, duration);
      }
    };
    animateProgressBar();
  }, []);

  // const handleScroll = () => {
  //   const startAnimationElement = document.getElementById('start-animation');
  //   const boundingRect = startAnimationElement.getBoundingClientRect();
  //   const windowHeight = window.innerHeight;

  //   if (boundingRect.top <= windowHeight) {
      
  //   }
  // };

  // useEffect(()=>{
  //   window.addEventListener('scroll',handleScroll);
  //   return()=>{
  //     window.removeEventListener('scroll',handleScroll)
  //   }
  // },[filled])



// const [filled, setFilled] = useState(0);

//   useEffect(() => {
//     const increment = 2;
//     const duration = 100;
//     const targetProgress = 80;

//     const animateProgressBar = () => {
//       if (filled < targetProgress) {
//         setFilled((prevFilled) => {
//           const newFilled = prevFilled + increment;
//           return newFilled > targetProgress ? targetProgress : newFilled;
//         });
//         setTimeout(animateProgressBar, duration);
//       }
//     };

//     const handleScroll = () => {
//       const startAnimationElement = document.getElementById('start-animation');
//       const boundingRect = startAnimationElement.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       if (boundingRect.top <= windowHeight) {
//         animateProgressBar();
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [filled]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="Key">
      <div className="Key-bgimg">
        <img className="bgimg-bridge" src={Bridge}></img>
        <div className="Key-box" data-aos="fade-up" >
          <div className="box-text"  >
            <p className="box-1">Our Key Points</p>
            <p className="box-2">Why Choose Us</p>
            <p className="box-3">
              Bring to the table win-win survival strategies to ensure proactive
              <br></br> domination. At the end of the day, going forward, a new
              normal <br></br> that has evolved from generation . Bring to the
              table win-win <br></br> survival strategies to ensure proactive
              domination. At the end of <br></br> the day, going forward.
            </p>
            <div className="key-points">
              <p>Experienced Construction Professional</p>
              <p> Committted to Helping Our Clients</p>
              <p>Building Maintenance & Renovation</p>
              <p>Innovative Eco Power Technologies</p>
            </div>
            <p className="construction">Construction</p>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${filled}%` }}>
                <span className="progress-text">{`${filled}%`}</span>
              </div>
            </div>
            <p className="renovation">Construction</p>
            <div className="progress-bar-container">
              <div  className="progress-bar" style={{ width: `${filled}%` }}>
                <span className="progress-text">{`${filled}%`}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="key-box2" data-aos="fade-up" >
          <img src={building} alt="" />
          <div className="blank-div">
            <div className="blank-details">
              <p className="blank-1">BIGGER, BETTER, FASTER</p>
              <p className="blank-2">
                Leading Way In Civil <br /> Construction
              </p>
              <p className="blank-3">
                Bring to the table win-win survival strategies to ensure
                proactive <br />
                domination. At the end of the day, going forward, a new normal
                that <br /> has evolved.
              </p>
              <p className="blank-4">REQUEST A CALL BACK</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Key;











