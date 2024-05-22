import { useState, useEffect } from "react";
import React from "react";
import Bridge from "/Construction Site/my-app/src/Images/bg-1.jpg";
import "./Key.css";

function Key() {
  //   const [filled, isFilled] = useState(0);
  //   const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     if (filled < 100 && loading) {
  //       setTimeout(() => isFilled((prev) => (prev = 2)), 50);
  //     }
  //   }, [filled, loading]);

  //   const [filled, setFilled] = useState(0);

  //   useEffect(() => {
  //     const increment = 2;
  //     const duration = 50;

  //     const animateProgressBar = () => {
  //       if (filled < 100) {
  //         setFilled((prevFilled) => prevFilled + increment);
  //         setTimeout(animateProgressBar, duration);
  //       }
  //     };

  //     animateProgressBar();
  //   }, []);

  // const [filled, setFilled] = useState(0);

  //   useEffect(() => {
  //     const increment = 2;
  //     const duration = 500;
  //     const targetProgress = 80;

  //     const animateProgressBar = () => {
  //       if (filled < targetProgress) {
  //         setFilled(prevFilled => prevFilled + increment);
  //         setTimeout(animateProgressBar, duration);
  //       }
  //     };

  //     animateProgressBar();
  //   }, []);

  const [filled, setFilled] = useState(0);

  useEffect(() => {
    const increment = 2;
    const duration = 500;
    const targetProgress = 80;

    const animateProgressBar = () => {
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

  return (
    <div className="Key">
      <div className="Key-bgimg">
        <img src={Bridge}></img>
        <div className="Key-box">
          <div className="box-text">
            <p className="box-1">Our Key Points</p>
            <p className="box-2">Why Choose Us</p>
            <p className="box-3">
              {" "}
              Bring to the table win-win survival strategies to ensure proactive{" "}
              <br></br> domination. At the end of the day, going forward, a new
              normal <br></br> that has evolved from generation . Bring to the
              table win-win <br></br> survival strategies to ensure proactive
              domination. At the end of <br></br> the day, going forward.{" "}
            </p>
            <div className="key-points">
              <p>Experienced Construction Professional</p>
              <p> Committted to Helping Our Clients</p>
              <p>Building Maintenance & Renovation</p>
              <p>Innovative Eco Power Technologies</p>
            </div>
            {/* <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${filled}%` }}
              ></div>
            </div> */}

            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${filled}%` }}>
                <span className="progress-text">{`${filled}%`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Key;
