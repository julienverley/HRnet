import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

const Error = () => {
  return (
    <div className="error404">
      <Header h1="404 error" />
      <div className="error-page">
        <h2 className="error-page-message">Page not found...</h2>
        <div className="error-page-link-message">
          <NavLink to="/">
            <h4 className="error-link-message">Go back to Form</h4>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Error;
