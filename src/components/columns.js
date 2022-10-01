// Function used to format the date field (npm install date-fns --save)
import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Date of Birth",
    accessor: "birthDate",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "Start Date",
    accessor: "startDate",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "Street Address",
    accessor: "street",
  },
  {
    Header: "City Address",
    accessor: "city",
  },
  {
    Header: "State Address",
    accessor: "state",
  },
  {
    Header: "Zipcode Address",
    accessor: "zipCode",
  },
  {
    Header: "Department",
    accessor: "department",
  },
];
