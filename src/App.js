import React from "react";
import Countries from "./Pages/Countries";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Countries />
    </Router>
  );
}
