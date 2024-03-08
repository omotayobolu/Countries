import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import { useLocation } from "react-router-dom";
import Details from "../components/Details";
import Regions from "../components/Regions";

const Countries = () => {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        />
        <Route
          path="/details/:name"
          element={
            <Details darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          }
        />
        <Route
          path="/region/:region"
          element={
            <Regions darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          }
        />
      </Routes>
    </>
  );
};

export default Countries;
