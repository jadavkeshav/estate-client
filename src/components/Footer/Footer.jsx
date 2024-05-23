import React from "react";
import "./Footer.css";
import Logo from "../../../public/Real Eastet final_V002-01.png"
import { useLocation } from "react-router-dom";
const Footer = () => {

  const location = useLocation();

  let pathname = location.pathname.split("/")[1];
  
  return (
    <div className="f-wrapper" style={{marginTop: pathname === "sign-in" ? "35rem" : '0'}}>
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src={Logo} alt="" style={{width: "150px"}} />
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
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
