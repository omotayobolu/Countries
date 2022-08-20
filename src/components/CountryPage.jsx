import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Dropdown from "./Dropdown";

const CountryPage = ({ country }) => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + search);
  };

  return (
    <div className="home-page">
      <div className="home-page-heading">
        <form onSubmit={SubmitHandler}>
          <FaSearch />
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search for a country..."
            style={{
              color: "hsl(209, 23%, 22%)",
              borderRadius: "5px",
              fontSize: "0.9rem",
              fontWeight: "600",
            }}
          />
        </form>
        <div className="selectRegions">
          <Dropdown />
        </div>
      </div>
      <div className="countries">
        {country.map((item) => {
          return (
            <Link to={"/details/" + item.name.common}>
              <div className="content" key={item.ccn3}>
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
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CountryPage;
