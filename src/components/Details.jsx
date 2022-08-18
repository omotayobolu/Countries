import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Header from "./Header";
import { nanoid } from "nanoid";

const Details = () => {
  let params = useParams();

  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchDetails = async () => {
      const data = await fetch(
        `https://restcountries.com/v3.1/name/${params.name}`
      );
      const detailsData = await data.json();
      setDetails(detailsData[0]);
      console.log(detailsData[0]);
      setLoading(false);
    };

    fetchDetails();
  }, [params.name]);

  if (details.length === 0) {
    return <p className="loading">Loading....</p>;
  }

  return (
    <div className="detailsPage">
      <Header />
      <div className="detail">
        <Link to="/">
          <button className="back">
            <BiArrowBack /> Back
          </button>
        </Link>

        {!loading && (
          <div className="details-content">
            <img src={details.flags.png} alt={details.name.official} />
            <div className="description">
              <h1>{details.name.common}</h1>
              <div className="main-description">
                <div className="main-description-1">
                  <p>
                    <strong>Native Name: </strong>
                    <span>
                      {
                        details.name.nativeName[
                          Object.keys(details.name.nativeName)[0]
                        ].official
                      }
                    </span>
                  </p>
                  <p>
                    <strong>Population: </strong>
                    <span>
                      {details.population.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </p>
                  <p>
                    <strong>Region: </strong>
                    <span>{details.region}</span>
                  </p>
                  <p>
                    <strong>Sub Region: </strong>
                    <span>{details.subregion}</span>
                  </p>
                  <p>
                    <strong>Capital: </strong>
                    {details.capital.map((cap) => (
                      <div className="caps" key={nanoid()}>
                        {cap}
                      </div>
                    ))}
                  </p>
                </div>
                <div className="main-description-2">
                  <p>
                    <strong>Top Level Domain: </strong>
                    {details.tld.map((top) => (
                      <div className="topLevel" key={nanoid()}>
                        {top}
                      </div>
                    ))}
                  </p>
                  <p>
                    <strong>Currencies: </strong>
                    <span>
                      {
                        details.currencies[Object.keys(details.currencies)[0]]
                          .name
                      }
                    </span>
                  </p>
                  <p>
                    <strong>Languages: </strong>
                    <span>
                      {details.languages[Object.keys(details.languages)[0]]}
                    </span>
                  </p>
                </div>
              </div>
              <div className="borders">
                <strong>Border Countries: </strong>
                {details.borders > 0 ? (
                  details.borders.map((border) => {
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
        )}
      </div>
    </div>
  );
};

export default Details;
