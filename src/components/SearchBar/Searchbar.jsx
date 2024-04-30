import React from "react";
import "./Searchbar.css";
import { HiLocationMarker } from "react-icons/hi";

const Searchbar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for your dream property" />
      <select name="type" id="type" onChange={() => {}}>
        <option value="rent">Rent</option>
        <option value="buy">Buy</option>
      </select>
      <select name="location" id="location" onChange={() => {}}>
        <option value="lagos">Hyderabad</option>
        <option value="abuja">Bangalore</option>
        <option value="ibadan">Chennai</option>
        <option value="enugu">Vizag</option>
        <option value="portharcourt">Delhi</option>
      </select>
      <button>Search</button>
    </div>
  );
};

export default Searchbar;
