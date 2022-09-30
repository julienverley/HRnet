import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

const Error = () => {
  return (
    <div className="error404">
      <div className="header">
        <Header />
      </div>
      <div className="error-content">
        <h2 className="error-message">Page inexistante...</h2>
        <NavLink to="/">
          <h4 className="error-link">Retourner sur la page du formulaire</h4>
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
