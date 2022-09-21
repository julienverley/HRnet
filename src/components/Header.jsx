import React from "react";
import Logo from "./Logo";

const Header = ({ h1 }) => {
  return (
    <>
      <div className="header">
        <Logo />
        <h1>{h1}</h1>
      </div>
    </>
  );
};

export default Header;
