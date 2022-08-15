import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Header from "./Header";

const Details = () => {
  let params = useParams();

  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const data = await fetch(
      `https://restcountries.com/v3.1/name/${params.name}`
    );
    const detailsData = await data.json();
    setDetails(detailsData);
    console.log(detailsData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <>
      <Header />
      <div className="details">
        <Link to="/">
          <button className="back">
            <BiArrowBack /> Back
          </button>
        </Link>
        <div className="details-content">
          <div className="details-img">
            {/* <img src={details.flags.png} alt={details.name.official} /> */}
          </div>
          {/* <div className="details-text">
            <h1>{details.name.official}</h1>
            <div className="description">
              <p>
                <strong>Native Name: </strong>
                {details.name.nativeName.common}
              </p>
              <p>
                <strong>Population: </strong>
                {details.population}
              </p>
              <p>
                <strong>Region: </strong>
                {details.region}
              </p>
              <p>
                <strong>Sub Region: </strong>
                {details.subregion}
              </p>
              <p>
                <strong>Capital: </strong>
                {details.capital[0]}
              </p>
              <p>
                <strong>Top Level Domain: </strong>
                {details.tld[0]}
              </p>
              <p>
                <strong>Currencies: </strong>
                {details.currencies}
              </p>
              <p>
                <strong>Languages: </strong>
                {details.languages}
              </p>
            </div>
            <div className="borders">
              <strong>Border Countries: </strong>
              {details.borders.map((border) => (
                <div className="border">
                  <p>{border.border}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Details;
