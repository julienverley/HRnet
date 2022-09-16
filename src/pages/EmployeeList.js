import React from "react";
import { NavLink } from "react-router-dom";

const EmployeeList = () => {
  return (
    <>
      <div>Current Employees</div>
      <NavLink to="/">Home</NavLink>
    </>
  );
};

export default EmployeeList;
