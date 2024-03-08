import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Dropdown from "./Dropdown";

const CountryPage = ({ country, darkMode }) => {
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(country);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const handleFilteredCountries = (event) => {
    const countryToSearch = event.target.value.toLowerCase();
    setSearch(countryToSearch);
    const filtered = country.filter((item) =>
      item.name.common.toLowerCase().includes(search)
    );
    setFilteredCountries(filtered);
  };

  return (
    <div className={darkMode ? "dark home-page" : "home-page"}>
      <div className="home-page-heading">
        <form onSubmit={SubmitHandler}>
          <FaSearch className={darkMode ? "dark" : ""} />
          <input
            type="text"
            onChange={handleFilteredCountries}
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
        {filteredCountries.map((item) => {
          return (
            <Link to={"/details/" + item.name.common} key={item.name.common}>
              <div className={darkMode ? "dark content" : "content"}>
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
                      <span>{item.capital ? item.capital : "No capital"}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {filteredCountries.length === 0 && (
        <p
          style={{
            textAlign: "center",
            color: darkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
            fontSize: "1.1rem",
          }}
        >
          The country ({search}) does not exist!
          <br />
          Search for another country.
        </p>
      )}
    </div>
  );
};

export default CountryPage;
