import React from "react";
import "./Footer2.css";
import logo from "/Construction Site/my-app/src/Images/Build.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoGoogle } from 'react-icons/io5';



function Footer2() {
  return (
    <div className="footer2">
      <div className="grid-item1">
        <img src={logo} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur <br /> repellat voluptates
          reiciendis magnam. <br /> Possimus adipisci optio facilis laborum{" "}
          <br /> sit, eum aliquam ex laboriosam labore eius, non
        </p>
      </div>

      <div className="grid-item2">
        <p>Useful Links</p>
        <ul>
          <li>Home</li>
          <li>Aboutasasa</li>
          <li>Contact</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
      </div>

      <div className="grid-item3">
        <p>Useful Links</p>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
      </div>

      <div className="grid-item4">
        <p>Newsletter</p>
        <p className="update">Get latest updates and offers.</p>
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter your email address"
        />
        <button>
          <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
        </button>

        <div className="flex-circle">
          <div className="circle1">
            <FaFacebook color="#ffffff" size={30} />
          </div>
          <div className="circle1">
            <FaTwitter  color="#ffffff" size={30} />
          </div>
          <div className="circle1">
            <FaLinkedin   color="#ffffff" size={29}/>

          </div>
          <div className="circle1">
            <IoLogoGoogle  color="#ffffff" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
