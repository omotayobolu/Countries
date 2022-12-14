import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Header from "./Header";
import Dropdown from "./Dropdown";
import { motion } from "framer-motion";

const Regions = ({ darkMode, toggleDarkMode }) => {
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

  if (regions.length === 0) {
    return <p className={darkMode ? "dark loading" : "loading"}>Loading....</p>;
  }

  return (
    <div className={darkMode ? "dark regions" : "regions"}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="region-heading">
        <Link to="/">
          <button className={darkMode ? "dark back" : "back"}>
            <BiArrowBack /> Back
          </button>
        </Link>
        <Dropdown darkMode={darkMode} />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="region-countries"
        style={{ paddingBottom: "10%" }}
      >
        {regions.map((item) => {
          return (
            <Link to={"/details/" + item.name.common}>
              <div
                className={darkMode ? "dark content" : "content"}
                key={item.ccn3}
              >
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
                    <p style={{ display: "flex" }}>
                      <strong>Capital</strong>:{" "}
                      <span>
                        {item.capital ? item.capital : <p> No capital</p>}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Regions;
