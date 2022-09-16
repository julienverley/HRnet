import React from "react";
import { NavLink } from "react-router-dom";

const EmployeeCreate = () => {
  return (
    <>
      <div>HRNet</div>
      <NavLink to="/list">
        <div>View Current Employees</div>
      </NavLink>
      <div>Create Employee</div>
    </>
  );
};

export default EmployeeCreate;
