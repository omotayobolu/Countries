import useSWR from "swr";
import CountryPage from "./CountryPage";
import Header from "./Header";
import ErrorPage from "./ErrorPage";

const Home = ({ darkMode, toggleDarkMode }) => {
  const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error("An error occured. Try again later.");
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  };

  const { data, isLoading, error } = useSWR(
    "https://restcountries.com/v3.1/all",
    fetcher
  );

  if (isLoading)
    return <p className={darkMode ? "dark loading" : "loading"}>Loading...</p>;

  if (error) {
    return <ErrorPage darkMode={darkMode} />;
  }

  return (
    <div>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <CountryPage darkMode={darkMode} country={data} />
    </div>
  );
};

export default Home;
