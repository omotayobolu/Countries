import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Details = () => {
  let params = useParams();

  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const data = await fetch(
      `https://restcountries.com/v3.1/name/${params.name}`
    );
    const detailsData = await data.json();
    setDetails(detailsData);
    console.log(detailsData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>
      <h1>{details.population}</h1>
    </div>
  );
};

export default Details;
