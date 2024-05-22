import React from "react";
import "./About.css";
import roller from "/Construction Site/my-app/src/Images/roller.png";
function About() {
  return (
    <div className="About">
      <p>Technology Civil</p>
      <div className="About-details">
        <img src={roller} alt="" />
        <div className="About-title">About Company</div>
        <div className="About-sub">
          We Provide the Guaranteed Quality in Construction
        </div>
        <div className="About-des">
          Bring to the table win-win survival strategies to ensure proactive
          domination. At the <br /> end of the day, going forward, a new normal
          that has evolved from generation X is on <br /> the runway heading
          towards a streamlined cloud solution. strategies to ensure <br />{" "}
          proactive domination.
        </div>
        <div className="prof-title">
          Professional <br /> Team
        </div>
        <div className="prof-des">
          Our gutter protection simply works better <br /> than any other
          product.
        </div>
        <div className="qual-title">Quality <br /> Service</div>
        <div className="qual-des">Simply works our gutter protection better <br /> than any other product.</div>
      </div>
    </div>
  );
}

export default About;
