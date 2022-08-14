import React from "react";
import { BsMoon } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header">
      <h1>Where in the world?</h1>
      <div className="moon">
        <BsMoon />
        Dark Mode
      </div>
    </div>
  );
};

export default Header;
