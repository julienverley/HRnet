import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

const Error = () => {
  return (
    <div className="error404">
      <div className="header">
        <Header />
      </div>
      <div className="error-page">
        <h2 className="error-page-message">Page inexistante...</h2>
        <div className="error-page-link-message">
          <NavLink to="/">
            <h4 className="error-link-message">
              Retourner sur la page du formulaire
            </h4>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Error;
