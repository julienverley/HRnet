import React from "react";
import { NavLink } from "react-router-dom";
import Table from "../components/Table";
import Header from "../components/Header";
import AtomNavButton from "../components/atoms/AtomNavButton";
import LastConnexionMessage from "../components/LastConnexionMessage";
import { useSelector } from "react-redux";

// Page where to see employees
const EmployeesList = () => {
  const employees = useSelector((state) => state.employees.employees);

  return (
    <>
      <Header h1="Current Employees" />
      <div className="body">
        <div className="body-header">
          <div className="body-header-link">
            <NavLink className="navlink" to="/">
              <AtomNavButton content="Create employee" />
            </NavLink>
          </div>
        </div>
        {/* Table */}
        <br />
        <Table data={employees} />
      </div>
      <LastConnexionMessage />
    </>
  );
};

export default EmployeesList;
