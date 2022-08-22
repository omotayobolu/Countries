import React from "react";
import { BsMoon, BsMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <div id="header" className={darkMode ? "dark" : ""}>
      <Link to="/">
        <h1 className={darkMode ? "dark" : ""}>Where in the world?</h1>
      </Link>
      <div className={darkMode ? "dark moon" : "moon"} onClick={toggleDarkMode}>
        {darkMode ? <BsMoonFill style={{ fill: "white" }} /> : <BsMoon />}
        {darkMode ? "Dark" : "Light"} Mode
      </div>
    </div>
  );
};

export default Header;
