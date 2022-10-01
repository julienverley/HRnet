// Unused

import React, { useMemo } from "react";
import { useTable } from "react-table";
// import MOCK_DATA from "../data/MOCK_DATA.json";
import { COLUMNS } from "./columns";

//  data is context.employees cf. EmployeesList.js
const BasicTable = ({ data }) => {
  const columns = useMemo(() => COLUMNS, []);
  // const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const {
    getTableProps,
    getTableBodyProps,
    // Group of headers, map of each header (column) (cf. Header in columns.js [])
    headerGroups,
    // Rows from the table instance (for each row, map of each cell (cf. accessor in columns.js []))
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BasicTable;

// Tableau qui gère la pagination ? https://react-table-v7.tanstack.com/docs/api/usePagination
// Tableau qui gère le nombre de lignes affichées ?
