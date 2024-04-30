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

  return (
    <div className="wrapper">
      <div className="properties">
        <Searchbar />
        <div className="paddings flexCenter property-cards">
          {data.map((card, i) => (
            <PropertyCard card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
