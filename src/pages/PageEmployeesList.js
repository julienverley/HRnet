import React from "react";
import { NavLink } from "react-router-dom";
// import BasicTable from "../components/BasicTable";
// import SortingTable from "../components/SortingTable";
import Table from "../components/Table";
import Header from "../components/Header";
import { employeesListContext } from "../context/ContextProvider";
import AtomNavButton from "../components/atoms/AtomNavButton";

const EmployeesList = () => {
  const context = React.useContext(employeesListContext);
  // console.log(context.employees); //
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
        <Table data={context.employees} />
      </div>
      {/*  */}
      {/* Date management */}
      <div style={{ fontSize: "3rem", opacity: ".2", textAlign: "center" }}>
        Vous vous êtes connecté{" "}
        {new Date().toLocaleDateString("fr-FR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        })}
      </div>
      {/*  */}
    </>
  );
};

export default EmployeesList;
