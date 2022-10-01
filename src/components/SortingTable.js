import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
// import MOCK_DATA from "../data/MOCK_DATA.json";
import { COLUMNS } from "./columns";

//  data is context.employees cf. EmployeesList.js
const SortingTable = ({ data }) => {
  const columns = useMemo(() => COLUMNS, []);
  // const data = useMemo(() => MOCK_DATA, []);

  //   const tableInstance = useTable({
  //     columns,
  //     data,
  //   });

  //   const {
  //     getTableProps,
  //     getTableBodyProps,
  //     // Group of headers, map of each header (column) (cf. Header in columns.js [])
  //     headerGroups,
  //     // Rows from the table instance (for each row, map of each cell (cf. accessor in columns.js []))
  //     rows,
  //     prepareRow,
  //   } = tableInstance;

  const {
    getTableProps,
    getTableBodyProps,
    // Group of headers, map of each header (column) (cf. Header in columns.js [])
    headerGroups,
    // Rows from the table instance (for each row, map of each cell (cf. accessor in columns.js []))
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
              </th>
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

export default SortingTable;

// Tableau qui gère la pagination ? https://react-table-v7.tanstack.com/docs/api/usePagination
// Tableau qui gère le nombre de lignes affichées ?
