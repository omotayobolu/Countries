import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Dropdown from "./Dropdown";
import { motion } from "framer-motion";

const CountryPage = ({ country, darkMode }) => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + search);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
      className={darkMode ? "dark home-page" : "home-page"}
    >
      <div className="home-page-heading">
        <form onSubmit={SubmitHandler}>
          <FaSearch className={darkMode ? "dark" : ""} />
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search for a country..."
            className={darkMode ? "dark" : ""}
          />
        </form>
        <div className="selectRegions">
          <Dropdown darkMode={darkMode} />
        </div>
      </div>
      <div className="countries" style={{ paddingBottom: "10%" }}>
        {country.map((item) => {
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
                      <strong>Capital</strong>:
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
      </div>
    </motion.div>
  );
};

export default CountryPage;
