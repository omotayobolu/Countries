import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Header from "./Header";

const Searched = ({ darkMode, toggleDarkMode }) => {
  let params = useParams();
  const [searchedCountries, setSearchedCountries] = useState([]);

  const getSearched = async (name) => {
    const data = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const country = await data.json();
    setSearchedCountries(country);
    console.log(country);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  if (searchedCountries.length === 0) {
    return <p className={darkMode ? "dark loading" : "loading"}>Loading....</p>;
  }

  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className={darkMode ? "dark detailsPage" : "detailsPage"}>
        <div className="detail">
          <Link to="/">
            <button className={darkMode ? "dark back" : "back"}>
              <BiArrowBack /> Back
            </button>
          </Link>
          {searchedCountries.length ? (
            searchedCountries.map((item) => {
              return (
                <div className="details-content" key={nanoid()}>
                  <img
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    src={item.flags.png}
                    alt={item.name.official}
                  />
                  <div
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    className={darkMode ? "dark description" : "description"}
                  >
                    <h1>{item.name.common}</h1>
                    <div className="main-description">
                      <div className="main-description-1">
                        <p>
                          <strong>Native Name: </strong>
                          <span>
                            {
                              item.name.nativeName[
                                Object.keys(item.name.nativeName)[0]
                              ].official
                            }
                          </span>
                        </p>
                        <p>
                          <strong>Population: </strong>
                          <span>
                            {item.population.toLocaleString(undefined, {
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </p>
                        <p>
                          <strong>Region: </strong>
                          <span>{item.region}</span>
                        </p>
                        <p>
                          <strong>Sub Region: </strong>
                          <span>{item.subregion}</span>
                        </p>
                        <p>
                          <strong>Capital: </strong>
                          {item.capital ? (
                            item.capital.map((cap) => (
                              <div className="caps" key={nanoid()}>
                                {cap}
                              </div>
                            ))
                          ) : (
                            <p>No capital</p>
                          )}
                        </p>
                      </div>
                      <div className="main-description-2">
                        <p>
                          <strong>Top Level Domain: </strong>
                          {item.tld.map((top) => (
                            <div className="topLevel" key={nanoid()}>
                              {top}
                            </div>
                          ))}
                        </p>
                        <p>
                          <strong>Currencies: </strong>
                          <span>
                            {
                              item.currencies[Object.keys(item.currencies)[0]]
                                .name
                            }
                          </span>
                        </p>
                        <p>
                          <strong>Languages: </strong>
                          <span>
                            {item.languages[Object.keys(item.languages)[0]]}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="borders">
                      <strong>Border Countries: </strong>
                      {item.borders ? (
                        item.borders.map((border) => {
                          return (
                            <div className="border" key={nanoid()}>
                              {border}
                            </div>
                          );
                        })
                      ) : (
                        <p style={{ marginLeft: "5px" }}>No borders</p>
                      )}
                    </div>
                  </div>{" "}
                </div>
              );
            })
          ) : (
            <p className="loading">No such country</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Searched;
