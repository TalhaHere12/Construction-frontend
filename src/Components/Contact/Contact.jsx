import React from "react";
import "./Contact.css";
import map from "/Construction Site/my-app/src/Images/icon-map.png";
import phone from '/Construction Site/my-app/src/Images/icon-phone.png'
import email from '/Construction Site/my-app/src/Images/icon-mail.png'

function Contact() {
  return (
    <div className="Grid">
      <div className="input-fields">
        <p className="title">Get in Touch</p>
        <h1 className="sub-title">We Love to hear from you</h1>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Your Name"
          className="inputs"
        />

        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Your Email"
          className="inputs"
        />

        <input
          type="text"
          name="subject"
          id="subject"
          required
          placeholder="Your Subject"
          className="inputs"
        />

        <input
          type="text"
          name="message"
          id="message"
          required
          placeholder="Your Message"
          className="input1"
        />
        <button className="Button">Submit One</button>
      </div>
      <div className="Address">
        <h1 className="address-title">Our Address</h1>
        <p>
          Completely synergize resource taxing relationships <br /> via premier
          niche markets. Professionally cultivate <br /> one-to-one customer
          service.
        </p>
        <div className="Map">
          <img src={map} alt="" className="map-image" />
          <p className="map-title">Address</p>
          <p className="map-des">
            54B, Tailstoi Town 5238 MT, La city, IA 5224
          </p>
        </div>

        <div className="phone">
          <img src={phone} alt="" className="phone-image" />
          <p className="phone-title">Phone</p>
          <p className="phone-des">
            54B, Tailstoi Town 5238 MT, La city, IA 5224
          </p>
        </div>

        <div className="email">
          <img src={email} alt="" className="email-image" />
          <p className="email-title">Email</p>
          <p className="email-des">
            54B, Tailstoi Town 5238 MT, La city, IA 5224
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
