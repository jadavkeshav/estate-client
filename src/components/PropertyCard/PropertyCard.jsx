import React from "react";
import "./PropertyCard.css";
import { truncate } from "lodash";
import { useNavigate } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import { BiArea, BiCar } from "react-icons/bi";
import {
  MdBedroomParent,
  MdOutlineBathroom,
  MdOutlineBedroomParent,
} from "react-icons/md";
import { BsEye, BsYoutube } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
const PropertyCard = ({ card }) => {
  const navigate = useNavigate();


  return (
    <div className="r-card" onClick={() => navigate(`../properties/${card.id}`)}>
      <img src={card.image[0]} alt="home" className="r-img" />
      <div className="content">
        <div className="title">
          <span className="title-text">
            {truncate(card.title, { length: 15 })}
          </span>
        </div>
        <div className="location">
          <HiLocationMarker style={{ color: "blue" }} />
          <span className="location-text">
            {card.address + ", " + card.city + ", " + card.country}
          </span>
        </div>
        <div className="description">
          <span className="descriptionText">
            <span style={{ color: "var(--primary)" }}>Info: </span>
            {truncate(card.description, { length: 30 })}
          </span>
        </div>
        <div className="facilities">
          <span className="bedroom">
            <MdOutlineBedroomParent />
            {" " + card.facilities.bedrooms + " bedrooms"}
          </span>
          <span className="bathroom">
            <MdOutlineBathroom />
            {" " + card.facilities.bathrooms + " bathrooms"}
          </span>
          <span className="area">
            <BiArea />
            {" " + card.facilities.area + " sqft"}
          </span>
          <span className="parking">
            <BiCar />
            {" " + card.facilities.parkings + " parking"}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div className="price" style={{ display: "flex" , alignItems: "center"}}>
            <span className="price" style={{ color: "#1f3e72" , whiteSpace: "nowrap"}}><FaRupeeSign size="0.8em" /> {card.price}</span>

          </div>
          <div className="additionals">
            <button onClick={() => navigate(`../properties/${card.id}`)}>
              <BsEye color="white" fontWeight={700}/>
            </button>

            <a href={card.yturl} target="_blank" rel="noreferrer">
              <button>
                <BsYoutube color="white"  />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
