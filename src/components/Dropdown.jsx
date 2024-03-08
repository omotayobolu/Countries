import { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

const Dropdown = ({ darkMode }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Filter by Region");
  const [selectedRegion, setSelectedRegion] = useState(false);

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    if (selectedRegion) {
      setSelected(selected);
      setIsActive(false);
    }
  }, [selected, selectedRegion]);

  const handleRegionChange = (region) => {
    setSelected(region);
    setSelectedRegion(true);
    setIsActive(false);
  };

  return (
    <div className="dropdown">
      <div
        className={darkMode ? "dark dropdown-head" : "dropdown-head"}
        onClick={() => setIsActive((prevActive) => !prevActive)}
      >
        {selected}
        <span>
          <RiArrowDropDownLine />
        </span>
      </div>
      {isActive && (
        <div className={darkMode ? "dark dropdown-body" : "dropdown-body"}>
          {regions.map((region) => (
            <Link to={`/region/${region}`} key={nanoid()}>
              <div>
                <div
                  className={darkMode ? "dark item" : "item"}
                  onClick={() => handleRegionChange(region)}
                >
                  {region}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
