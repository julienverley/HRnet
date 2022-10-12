import React from "react";
import Logo from "./Logo";
// import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = ({ h1 }) => {
  // const navigate = useNavigate();

  return (
    <>
      <div className="header">
        {/* <div onClick={() => navigate("/")}> */}
        <NavLink to="/">
          <Logo />
        </NavLink>
        <h1>{h1}</h1>
      </div>
    </>
  );
};

export default Header;
