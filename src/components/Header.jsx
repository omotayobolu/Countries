import React from "react";
import { BsMoon, BsMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>Where in the world?</h1>
      </Link>
      <div className="moon">
        <BsMoon />
        Dark Mode
      </div>
    </div>
  );
};

export default Header;
