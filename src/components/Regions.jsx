import useSWR from "swr";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Header from "./Header";
import Dropdown from "./Dropdown";
import ErrorPage from "./ErrorPage";

const Regions = ({ darkMode, toggleDarkMode }) => {
  let params = useParams();

  const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error("Something went wrong!");
      console.log(error);
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  };

  const { data, isLoading, error } = useSWR(
    `https://restcountries.com/v3.1/region/${params.region}`,
    fetcher
  );

  if (isLoading)
    return <p className={darkMode ? "dark loading" : "loading"}>Loading...</p>;

  if (error) return <ErrorPage darkMode={darkMode} />;

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
      <div className="region-countries" style={{ paddingBottom: "10%" }}>
        {data.map((item) => {
          return (
            <Link to={"/details/" + item.name.common} key={item.name.common}>
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
                        {item.capital ? item.capital : <span> No capital</span>}
                      </span>
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

export default Regions;
