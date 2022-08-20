import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Filter by Region");

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <div className="dropdown">
      <div className="dropdown-head" onClick={() => setIsActive(!isActive)}>
        {selected}
        <span>
          <RiArrowDropDownLine />
        </span>
      </div>
      {isActive && (
        <div className="dropdown-body">
          <div
            onClick={() => {
              setSelected(regions[0]);
              setIsActive(false);
            }}
            className="item"
          >
            <Link to={"/region/Africa"}>Africa</Link>
          </div>
          <div
            onClick={() => {
              setSelected(regions[1]);
              setIsActive(false);
            }}
            className="item"
          >
            <Link to={"/region/America"}>America</Link>
          </div>
          <div
            onClick={() => {
              setSelected(regions[2]);
              setIsActive(false);
            }}
            className="item"
          >
            <Link to={"/region/Asia"}>Asia</Link>
          </div>
          <div
            onClick={() => {
              setSelected(regions[3]);
              setIsActive(false);
            }}
            className="item"
          >
            <Link to={"/region/Europe"}>Europe</Link>
          </div>
          <div
            onClick={() => {
              setSelected(regions[4]);
              setIsActive(false);
            }}
            className="item"
          >
            <Link to={"/region/Oceania"}>Oceania</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
