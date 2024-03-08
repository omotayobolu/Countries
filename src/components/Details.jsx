import useSWR from "swr";
import { useParams, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Header from "./Header";
import ErrorPage from "./ErrorPage";

const Details = ({ darkMode, toggleDarkMode }) => {
  let params = useParams();

  const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error("An error occured!");
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  };

  const { data, isLoading, error } = useSWR(
    `https://restcountries.com/v3.1/name/${params.name}`,
    fetcher
  );

  if (isLoading) {
    return <p className={darkMode ? "dark loading" : "loading"}>Loading....</p>;
  }

  if (error) return <ErrorPage darkMode={darkMode} />;

  return (
    <div className={darkMode ? "dark detailsPage" : "detailsPage"}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="detail">
        <Link to="/">
          <button className={darkMode ? "dark back" : "back"}>
            <BiArrowBack /> Back
          </button>
        </Link>

        {data.map((item) => (
          <div className="details-content" key={item.ccn3}>
            <img src={item.flags.png} alt={item.flags.alt} />
            <div className={darkMode ? "dark description" : "description"}>
              <h1>{item.name.common}</h1>
              <div
                className={
                  darkMode ? "dark main-description" : "main-description"
                }
              >
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
                        <span className="caps" key={cap}>
                          {cap}
                        </span>
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
                      <span className="topLevel" key={top}>
                        {top}
                      </span>
                    ))}
                  </p>
                  <p>
                    <strong>Currencies: </strong>
                    <span>
                      {item.currencies[Object.keys(item.currencies)[0]].name}
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
              <div className={darkMode ? "dark borders" : "borders"}>
                <strong>Border Countries: </strong>
                {item.borders ? (
                  item.borders.map((border) => {
                    return (
                      <span className="border" key={border}>
                        {border}
                      </span>
                    );
                  })
                ) : (
                  <p style={{ marginLeft: "5px" }}>No borders</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
