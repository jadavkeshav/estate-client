import React from "react";
import "./Footer.css";
import Logo from "../../../public/mylogo.png"
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

        <span>Copyright © 2022 Shankar. All Rights Reserved</span>
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
          
          <span className="secondaryText my"> <a href="http://jadavkeshav.vercel.app" target="_blank"> Crafted with passion by <span className="Nameeee">Jadav Keshav</span></a></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
