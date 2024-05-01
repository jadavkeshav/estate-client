
import React, { useEffect, useState } from "react";
import "./Hero.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Plaza", "House", "Apartment", "Property"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

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
    <div className="main">
      <div className="content">
        <h1>
          Find Your Dream{" "}
          <br />
          <span className="text">
            {text}
            <span>
              <Cursor cursorColor="orange" />
            </span>
          </span>
        </h1>
        <p className="mt-4">We Have Over Hundred's Properties For You.</p>
        <div className="search-bar">
          <input type="text" placeholder="Search for your dream property" />
          <select name="country" id="country" onChange={() => {}}>
            <option value="">Country</option>
            {countries.map((country, i) => (
              <option key={i} value={country}>
                {country.charAt(0).toUpperCase() + country.slice(1)}
              </option>
            ))}
          </select>
          <select name="city" id="city" onChange={() => {}}>
            <option value="">City</option>
            {cities.map((city, i) => (
              <option key={i} value={city}>
                {city.charAt(0).toUpperCase() + city.slice(1)}
              </option>
            ))}
          </select>
          <button onClick={search}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
