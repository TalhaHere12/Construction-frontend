import React from "react";
import "./Footer.css";
import map from "/Construction Site/my-app/src/Images/icon-7__mapmarker.png";
import mail from "/Construction Site/my-app/src/Images/icon-mail.png";
import phone from "/Construction Site/my-app/src/Images/icon-9__phone.png";
function Footer() {
  return (
    <div className="footer-container">
      <div className="grid-item">
        <div className="flex">
          <img src={map} alt="" />
          <p>
            54B, Tailstoi Town 5238 MT, <br />
            La city, IA 522364
          </p>
        </div>
      </div>
      <div className="grid-item">
        <div className="flex">
          <img src={mail} alt="" />
          <p>
            Email us : <br />
            info@example.com
          </p>
        </div>
      </div>
      <div className="grid-item">
        <div className="flex">
          <img src={phone} alt="" />
          <p>
            Call us on : <br />
            +1800-456-7890
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
