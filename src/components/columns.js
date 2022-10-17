// Function used to format the date field (npm install date-fns --save)
import { format } from "date-fns";
import PropTypes from "prop-types";

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
      // console.log(typeof value);
      return format(new Date(value), "yyyy/MM/dd");
    },
  },
  {
    Header: "Start Date",
    accessor: "startDate",
    Cell: ({ value }) => {
      return format(new Date(value), "yyyy/MM/dd");
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

// PropTypes for COLUMNS
COLUMNS.propTypes = {
  value: PropTypes.string,
};
