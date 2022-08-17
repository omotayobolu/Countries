import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import { useLocation } from "react-router-dom";
import Details from "../components/Details";
import Searched from "../components/Searched";

const Countries = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/details/:name" element={<Details />} />
      <Route path="/searched/:search" element={<Searched />} />
    </Routes>
  );
};

export default Countries;
