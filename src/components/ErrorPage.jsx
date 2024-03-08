import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = ({ darkMode }) => {
  return (
    <div className={darkMode ? "loading dark" : "loading"}>
      <p>
        An error occured! <br />
        <Link
          to="/"
          style={{
            textAlign: "center",
            color: darkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
            fontSize: "1rem",
            textDecoration: "underline",
          }}
        >
          {" "}
          Go Back
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
