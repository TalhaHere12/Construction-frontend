import React from "react";
import "./Main.css"; // Import the separate CSS file for styling
import BGimage from "/Construction Site/my-app/src/Images/bg-2.jpg";
import person from "/Construction Site/my-app/src/Images/image-1.jpg";
import square from "/Construction Site/my-app/src/Images/square.png";
import signature from "/Construction Site/my-app/src/Images/signature.png";
import founder from "/Construction Site/my-app/src/Images/author-1.jpg";

const Main = () => {
  return (
    <div className="main-container">
      <img src={BGimage} alt="" />
      <div className="person">
        <img src={person} alt="" className="person-img" />
        <img src={square} alt="" className="person-square" />
      </div>
      <div className="details">
        <p className="title" >Welcome to Company</p>
        <p className="sub-title" >Construction Company With Strategy In Business Growth</p>
        <p className="sub-desc" >
        We have been the trusted name in heating, air conditioning and plumbing businesses. Throughout the years, our number one goal
        </p>
        <p className="desc" >  
        For over 80 years, We have been the trusted name in heating, air conditioning and  businesses. Throughout the years, our number one goal has been to accurately . For over 80  We have been the trusted name in heatingconditioning and plumbing businesses . Throughout the  our number one goal has been to accurately .For over 80 years, We have <br /> been the trusted name in heating.
        </p>
        <div className="flex">
            <img src={founder} alt="" />
            <div className="founder">
                <p>Robert Joe Korry <br /> Founder</p>
            </div>
            <img src={signature} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
