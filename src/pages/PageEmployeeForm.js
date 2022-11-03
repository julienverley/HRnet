import React from "react";
import { NavLink } from "react-router-dom";
import AtomNavButton from "../components/atoms/AtomNavButton";
import EmployeeCreateForm from "../components/EmployeeCreateForm";
import Header from "../components/Header";

// Page where to add new employee(s)
const EmployeeForm = () => {
  return (
    <>
      <Header h1="HRnet" />
      <div>
        <div className="body-header">
          <div className="body-header-link">
            <NavLink className="navlink" to="/list">
              <AtomNavButton content="View current employees" />
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
