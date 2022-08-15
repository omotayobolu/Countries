import React from "react";
// import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const CountryPage = ({ country }) => {
  return (
    <div className="home-page">
      <form>
        <input
          type="text"
          placeholder="Search for a country..."
          style={{
            color: "hsl(209, 23%, 22%)",
            borderRadius: "5px",
            fontSize: "0.9rem",
          }}
        />
      </form>

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
