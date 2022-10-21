import React, { useEffect } from "react";
import Countries from "./Pages/Countries";
import { BrowserRouter as Router } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <Countries />
    </Router>
  );
}
