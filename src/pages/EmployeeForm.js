import React from "react";
import { NavLink } from "react-router-dom";
import EmployeeCreateForm from "../components/EmployeeCreateForm";
import Header from "../components/Header";

const EmployeeForm = () => {
  return (
    <>
      <Header h1="HRNet" />
      <div>
        <div className="body-header">
          <div className="body-header-link">
            <NavLink className="navlink" to="/list">
              <div className="nav">View Current Employees</div>
            </NavLink>
          </div>
          <h2 className="body-header-form-title">Create Employee</h2>
        </div>
        {/* Form */}
        <EmployeeCreateForm />
      </div>
    </>
  );
};

export default EmployeeForm;
