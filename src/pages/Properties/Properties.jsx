import React from "react";
import Searchbar from "../../components/SearchBar/Searchbar";
import "./Properties.css";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import PropertyCard from "../../components/PropertyCard/PropertyCard";

const Properties = () => {
  const { data, isError, isLoading } = useProperties();

  if (isError) {
    return <div className="wrapper">Error while fetching data</div>;
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  const searchParams = new URLSearchParams(window.location.search);
  const searchQuery = searchParams.get("search");
  const country = searchParams.get("country");
  const city = searchParams.get("city");

  let filteredData = [];

  if (data && (searchQuery || country || city)) {
    filteredData = data
      .filter((property) =>
        property.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter((property) =>
        property.city.toLowerCase().includes(city.toLowerCase())
      )
      .filter((property) =>
        property.country.toLowerCase().includes(country.toLowerCase())
      );
  }

  return (
    <div className="wrapper">
      <div className="properties">
        <Searchbar />
        <div className="paddings flexCenter property-cards">
          {filteredData.length > 0
            ? filteredData.map((card, i) => (
                <PropertyCard key={i} card={card} />
              ))
            : data.map((card, i) => <PropertyCard card={card} key={i} />)}
        </div>
      </div>
    </div>
  );
};

export default Properties;
