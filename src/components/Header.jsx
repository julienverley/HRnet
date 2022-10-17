import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ h1 }) => {
  return (
    <>
      <div className="header">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <h1>{h1}</h1>
      </div>
    </>
  );
};

// PropTypes for Header
Header.propTypes = {
  h1: PropTypes.string.isRequired,
};

export default Header;
