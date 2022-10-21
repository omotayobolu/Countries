import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import { useLocation } from "react-router-dom";
import Details from "../components/Details";
import Searched from "../components/Searched";
import Regions from "../components/Regions";
import { AnimatePresence } from "framer-motion";

const Countries = () => {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <AnimatePresence exitBeforeEnter>
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
          path="/searched/:search"
          element={
            <Searched darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          }
        />
        <Route
          path="/region/:region"
          element={
            <Regions darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default Countries;
