import React from "react";
import bgimage from "/Construction Site/my-app/src/Images/service-2.jpg";
import "./ServicesOne.css";
function ServicesOne() {
  return (
    <div className="ServicesOne">
      <div className="bg">
        <img src={bgimage} alt="" className="bgimage" />
      </div>

      <div className="details">
        <p className="s-title" >SERVICES DETAILS</p>
        <h1 className="s-heading" >Building Construction</h1>
        <p className="desc" >There are many variations of passages of Lorem Ipsum available, but <br /> the majority have suffered alteration in some form, by injected <br /> humour, or randomised words which don't look even slightly <br /> believable. If you are going to use a passage of Lorem Ipsum, you <br /> need to be sure there isn't anything embarrassing hidden.</p>
        <ul className="s-lists" >
            <li>Residential Roofing</li>
            <li>Commercial Roofing</li>
            <li>Tile Roofs</li>
            <li>Build-Up Roofing System</li>
            <li>Professional Staff</li>
            <li>Build-Up Roofing System</li>
        </ul>
        <p className="s-final" >Randomised words which don’t look even slightly believable. If you <br /> are going to use a passage</p>
      </div>
    </div>
  );
}

export default ServicesOne;
