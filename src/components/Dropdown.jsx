import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Dropdown = ({ darkMode }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Filter by Region");

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <div className="dropdown">
      <div
        className={darkMode ? "dark dropdown-head" : "dropdown-head"}
        onClick={() => setIsActive(!isActive)}
      >
        {selected}
        <span>
          <RiArrowDropDownLine />
        </span>
      </div>
      {isActive && (
        <div className={darkMode ? "dark dropdown-body" : "dropdown-body"}>
          <Link to={"/region/Africa"}>
            <div
              onClick={() => {
                setSelected(regions[0]);
                setIsActive(false);
              }}
              className={darkMode ? "dark item" : "item"}
            >
              Africa
            </div>
          </Link>
          <Link to={"/region/America"}>
            <div
              onClick={() => {
                setSelected(regions[1]);
                setIsActive(false);
              }}
              className={darkMode ? "dark item" : "item"}
            >
              America
            </div>
          </Link>
          <Link to={"/region/Asia"}>
            <div
              onClick={() => {
                setSelected(regions[2]);
                setIsActive(false);
              }}
              className={darkMode ? "dark item" : "item"}
            >
              Asia
            </div>
          </Link>
          <Link to={"/region/Europe"}>
            <div
              onClick={() => {
                setSelected(regions[3]);
                setIsActive(false);
              }}
              className={darkMode ? "dark item" : "item"}
            >
              Europe
            </div>
          </Link>
          <Link to={"/region/Oceania"}>
            <div
              onClick={() => {
                setSelected(regions[4]);
                setIsActive(false);
              }}
              className={darkMode ? "dark item" : "item"}
            >
              Oceania
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
