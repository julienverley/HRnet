import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

const EmployeeList = () => {
  return (
    <>
      <Header h1="Current Employees" />
      {/* Tableau ? */}
      <NavLink to="/">Home</NavLink>
    </>
  );
};

export default EmployeeList;
