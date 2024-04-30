import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import con from "../../../public/r3.svg"
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'
import whastapp from "../../../public/whatsapp-svgrepo-com.svg"
import Instagram from "../../../public/instagram.svg"
import Youtube from "../../../public/youtube.svg"
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>


          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div><span></span></div>
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">90101 67317</span>
                  </div>
                </div>
                <div className="flexCenter button">Call now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    {/* <HiChatBubbleBottomCenter size={25} /> */}
                    <img src={whastapp} alt="" style={{ width: '25px' }} />
                  </div>
                  <div className="flexColStart detail" >
                    <span className="primaryText">What'sapp</span>
                    <span className="secondaryText">90101 67317</span>
                  </div>
                </div>
                <div className="flexCenter button" onClick={() => window.open('https://wa.me/919010167317')}>Message now</div>
              </div>


              {/* ig */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    {/* <HiChatBubbleBottomCenter size={25} /> */}
                    <img src={Instagram} alt="" style={{ width: '25px' }} />
                  </div>
                  <div className="flexColStart detail" >
                    <span className="primaryText">Instagram</span>
                    <span className="secondaryText">Visit Our page</span>
                  </div>
                </div>
                <div className="flexCenter button" onClick={() => window.open('https://www.instagram.com/shankarhomespropertiesvlogs?igsh=bnNueWRuNGNybWJq')}>Visit now</div>
              </div>


              {/* Yt */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    {/* <HiChatBubbleBottomCenter size={25} /> */}
                    <img src={Youtube} alt="" style={{ width: '25px' }} />
                  </div>
                  <div className="flexColStart detail" >
                    <span className="primaryText">Youtube</span>
                    <span className="secondaryText">Visit our channel</span>
                  </div>
                </div>
                <div className="flexCenter button" onClick={() => window.open('https://www.youtube.com/@ShankarhomespropertiesVlogs')}>Message now</div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Contact;
