import React from "react";
import bgimage from "/Construction Site/my-app/src/Images/service-3.jpg";
import "./ServicesTwo.css";

function ServicesTwo() {
  return (
    <div className="s-two">
      <div className="stwo-details">
        <p className="two-title" >ABOUT QUALITY</p>
        <h1 className="two-heading" >Modern Service Standard</h1>
        <p className="two-desc1" > Which don't look even slightly believable. If you are going to use a passage of Lorem  Ipsum, you need to be sure</p>
        <p>Which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of  text. All the Lorem Ipsum generators on the Internet tend to repeat predefined. It  uses a dictionary of over 200 Latin words, combined with a handful of model  sentence ernet tend to repeat presure.</p>

        <ul className="two-ul" >
            <li>Start Building Construction Planning</li>
            <li>Quality Construction</li>
            <li>Work With Architecture Style</li>
            <li>Construction Consult With Expert</li>
        </ul>

      </div>
      <div className="bg-img">
        <img src={bgimage} alt="" className="bg-image" />
      </div>
    </div>
  );
}

export default ServicesTwo;
