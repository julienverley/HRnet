import React from "react";
import { NavLink } from "react-router-dom";
// import BasicTable from "../components/BasicTable";
// import SortingTable from "../components/SortingTable";
import Table from "../components/Table";
import Header from "../components/Header";
import AtomNavButton from "../components/atoms/AtomNavButton";
import LastConnexionMessage from "../components/LastConnexionMessage";
// useContext
// import { employeesListContext } from "../context/ContextProvider";
// Redux
import { useSelector } from "react-redux";

const EmployeesList = () => {
  // useContext
  // const context = React.useContext(employeesListContext);
  // console.log(context.employees); //

  // Redux toolkit
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
        {/* <Table data={context.employees} /> */}
        <Table data={employees} />
      </div>
      {/*  */}
      <LastConnexionMessage />
      {/*  */}
    </>
  );
};

export default EmployeesList;
