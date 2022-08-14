import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { nanoid } from "nanoid";

const CountryPage = ({ country }) => {
  return (
    <div className="home-page">
      <form onSubmit={(e) => e.preventDefault()}>
        <AiOutlineSearch />
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
            <div className="content" key={nanoid()}>
              <p>
                Population: <span>{item.population}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountryPage;
