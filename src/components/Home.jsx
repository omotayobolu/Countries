import { useEffect, useState } from "react";
import CountryPage from "./CountryPage";
import Header from "./Header";

const Home = () => {
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
      <Header />
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <CountryPage country={country} setCountry={setCountry} />
      )}
    </div>
  );
};

export default Home;
