import React, { useEffect, useState } from "react";
import "./Searchbar.css";
import { HiLocationMarker } from "react-icons/hi";

const Searchbar = () => {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://estate-server-dr3t.onrender.com/api/residency/allresd")
      .then((res) => res.json())
      .then((data) => {
        const cities = Array.from(
          new Set(data.map((property) => property.city.toLowerCase()))
        );
        const countries = Array.from(
          new Set(data.map((property) => property.country.toLowerCase()))
        );
        setCities(cities);
        setCountries(countries);
      });
  }, []);

  const search = () => {
    const searchQuery = document.querySelector("input").value;
    const country = document.querySelectorAll("select")[0].value;
    const city = document.querySelectorAll("select")[1].value;
    window.location.href = `/properties?country=${country}&city=${city}&search=${searchQuery}`;
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for your dream property" />
      <select>
        <option value="">Country</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country.charAt(0).toUpperCase() + country.slice(1)}
          </option>
        ))}
      </select>

      <select>
        <option value="">City</option>
        {cities.map((city, i) => (
          <option key={i} value={city}>
            {city.charAt(0).toUpperCase() + city.slice(1)}
          </option>
        ))}
      </select>

      <button onClick={search}>Search</button>
    </div>
  );
};

export default Searchbar;
