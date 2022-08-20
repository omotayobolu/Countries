import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Header from "./Header";
import Dropdown from "./Dropdown";

const Regions = () => {
  const [regions, setRegions] = useState([]);

  let params = useParams();

  const getRegion = async () => {
    const data = await fetch(
      `https://restcountries.com/v3.1/region/${params.region}`
    );
    const regions = await data.json();
    setRegions(regions);
    console.log(regions);
  };

  useEffect(() => {
    getRegion();
  });

  return (
    <div className="regions">
      <Header />
      <div className="region-heading">
        <Link to="/regions/">
          <button className="back">
            <BiArrowBack /> Back
          </button>
        </Link>
        <Dropdown />
      </div>
      <div className="region-countries">
        {regions.map((item) => {
          return (
            <div className="content" key={item.ccn3}>
              <Link to={"/details/" + item.name.common}>
                <img src={item.flags.png} alt={item.name.common} />
                <div className="country-content">
                  <h2>{item.name.official}</h2>
                  <div className="add-content">
                    <p>
                      <strong>Population</strong>:{" "}
                      {item.population.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </p>
                    <p>
                      <strong>Region</strong>: {item.region}
                    </p>
                    <p>
                      <strong>Capital</strong>: <span>{item.capital}</span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Regions;
