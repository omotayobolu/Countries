import { useEffect, useState } from "react";
import CountryPage from "./CountryPage";
import Header from "./Header";

const Home = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = async () => {
    {
      const api = await fetch("https://restcountries.com/v3.1/all");
      const data = await api.json();
      setCountry(data);
    }
  };
  return (
    <div>
      <Header />
      <CountryPage country={country} />
    </div>
  );
};

export default Home;
