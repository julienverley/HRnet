import React, { useState } from "react";

// employeesListContext is the context object
export const employeesListContext = React.createContext({
  employees: [],
});

// children is a prop that is passed to the ContextProvider children components
const ContextProvider = ({ children }) => {
  const [employees, setEmployees] = useState([
    {
      firstName: "Jenda",
      lastName: "Chatburn",
      birthDate: "1996-04-26T14:44:58Z",
      startDate: "2022-09-17T09:46:34Z",
      street: "29 Brickson Park Avenue",
      city: "North Las Vegas",
      state: "Nevada",
      zipCode: "89087",
      department: "Accounting",
    },
    {
      firstName: "Cati",
      lastName: "Munnery",
      birthDate: "1992-12-14T18:12:22Z",
      startDate: "2022-02-05T12:39:52Z",
      street: "3540 Southridge Lane",
      city: "Flushing",
      state: "New York",
      zipCode: "11355",
      department: "Human Resources",
    },
    {
      firstName: "Andras",
      lastName: "Baraclough",
      birthDate: "1971-09-01T06:23:51Z",
      startDate: "2021-10-06T21:09:59Z",
      street: "374 Lighthouse Bay Trail",
      city: "Nashville",
      state: "Tennessee",
      zipCode: "37228",
      department: "Engineering",
    },
    {
      firstName: "Jenda",
      lastName: "Chatburn",
      birthDate: "1996-04-26T14:44:58Z",
      startDate: "2022-09-17T09:46:34Z",
      street: "29 Brickson Park Avenue",
      city: "North Las Vegas",
      state: "Nevada",
      zipCode: "89087",
      department: "Accounting",
    },
    {
      firstName: "Cati",
      lastName: "Munnery",
      birthDate: "1992-12-14T18:12:22Z",
      startDate: "2022-02-05T12:39:52Z",
      street: "3540 Southridge Lane",
      city: "Flushing",
      state: "New York",
      zipCode: "11355",
      department: "Human Resources",
    },
    {
      firstName: "Andras",
      lastName: "Baraclough",
      birthDate: "1971-09-01T06:23:51Z",
      startDate: "2021-10-06T21:09:59Z",
      street: "374 Lighthouse Bay Trail",
      city: "Nashville",
      state: "Tennessee",
      zipCode: "37228",
      department: "Engineering",
    },
    {
      firstName: "Jenda",
      lastName: "Chatburn",
      birthDate: "1996-04-26T14:44:58Z",
      startDate: "2022-09-17T09:46:34Z",
      street: "29 Brickson Park Avenue",
      city: "North Las Vegas",
      state: "Nevada",
      zipCode: "89087",
      department: "Accounting",
    },
    {
      firstName: "Cati",
      lastName: "Munnery",
      birthDate: "1992-12-14T18:12:22Z",
      startDate: "2022-02-05T12:39:52Z",
      street: "3540 Southridge Lane",
      city: "Flushing",
      state: "New York",
      zipCode: "11355",
      department: "Human Resources",
    },
    {
      firstName: "Andras",
      lastName: "Baraclough",
      birthDate: "1971-09-01T06:23:51Z",
      startDate: "2021-10-06T21:09:59Z",
      street: "374 Lighthouse Bay Trail",
      city: "Nashville",
      state: "Tennessee",
      zipCode: "37228",
      department: "Engineering",
    },
    {
      firstName: "Jenda",
      lastName: "Chatburn",
      birthDate: "1996-04-26T14:44:58Z",
      startDate: "2022-09-17T09:46:34Z",
      street: "29 Brickson Park Avenue",
      city: "North Las Vegas",
      state: "Nevada",
      zipCode: "89087",
      department: "Accounting",
    },
    {
      firstName: "Cati",
      lastName: "Munnery",
      birthDate: "1992-12-14T18:12:22Z",
      startDate: "2022-02-05T12:39:52Z",
      street: "3540 Southridge Lane",
      city: "Flushing",
      state: "New York",
      zipCode: "11355",
      department: "Human Resources",
    },
    {
      firstName: "Andras",
      lastName: "Baraclough",
      birthDate: "1971-09-01T06:23:51Z",
      startDate: "2021-10-06T21:09:59Z",
      street: "374 Lighthouse Bay Trail",
      city: "Nashville",
      state: "Tennessee",
      zipCode: "37228",
      department: "Engineering",
    },
    {
      firstName: "Jenda",
      lastName: "Chatburn",
      birthDate: "1996-04-26T14:44:58Z",
      startDate: "2022-09-17T09:46:34Z",
      street: "29 Brickson Park Avenue",
      city: "North Las Vegas",
      state: "Nevada",
      zipCode: "89087",
      department: "Accounting",
    },
    {
      firstName: "Cati",
      lastName: "Munnery",
      birthDate: "1992-12-14T18:12:22Z",
      startDate: "2022-02-05T12:39:52Z",
      street: "3540 Southridge Lane",
      city: "Flushing",
      state: "New York",
      zipCode: "11355",
      department: "Human Resources",
    },
    {
      firstName: "Andras",
      lastName: "Baraclough",
      birthDate: "1971-09-01T06:23:51Z",
      startDate: "2021-10-06T21:09:59Z",
      street: "374 Lighthouse Bay Trail",
      city: "Nashville",
      state: "Tennessee",
      zipCode: "37228",
      department: "Engineering",
    },
  ]);

  // Cf. EmployeeCreateForm / onSubmit()
  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  ///
  const value = { employees, addEmployee };

  return (
    <employeesListContext.Provider value={value}>
      {children}
    </employeesListContext.Provider>
  );
};

export default ContextProvider;
