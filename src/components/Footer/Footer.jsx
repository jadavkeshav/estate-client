import React from "react";
import "./Footer.css";
import Logo from "../../../public/mylogo.svg"
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src={Logo} alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Contact </span>
          <span className="secondaryText">+91 90101 67317</span>
          <span className="secondaryText">shankarhomespropertiesvlogs@gmail.com</span>
          {/* <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
