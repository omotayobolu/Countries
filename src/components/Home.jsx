import { useEffect, useState } from "react";
import CountryPage from "./CountryPage";
import Header from "./Header";

const Home = ({ darkMode, toggleDarkMode }) => {
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = async () => {
    setLoading(true);
    const api = await fetch("https://restcountries.com/v3.1/all");
    const data = await api.json();
    setCountry(data);
    setLoading(false);
  };
  return (
    <div>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {loading ? (
        <p className={darkMode ? "dark loading" : "loading"}>Loading...</p>
      ) : (
        <CountryPage
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          country={country}
          setCountry={setCountry}
        />
      )}
    </div>
  );
};

export default Home;
