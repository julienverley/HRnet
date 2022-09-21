import React from "react";
import { NavLink } from "react-router-dom";
import BasicTable from "../components/BasicTable";
import Header from "../components/Header";

const EmployeeList = () => {
  return (
    <>
      <Header h1="Current Employees" />
      <body>
        <div className="body-header">
          <div className="body-header-link">
            <NavLink className="navlink" to="/">
              <div className="nav">Home</div>
            </NavLink>
          </div>
        </div>
        {/* Table */}
        <br />
        <BasicTable />
      </body>
    </>
  );
};

export default EmployeeList;
