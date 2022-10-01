import React, { useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
// import MOCK_DATA from "../data/MOCK_DATA.json";
import { COLUMNS } from "./columns";

//  data is context.employees cf. EmployeesList.js
const PaginationTable = ({ data }) => {
  const columns = useMemo(() => COLUMNS, []);
  // const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    // Group of headers, map of each header (column) (cf. Header in columns.js [])
    headerGroups,
    // Rows from the table instance (for each row, map of each cell (cf. accessor in columns.js []))
    // rows,
    // page, nextPage and previousPage... are used for pagination (cf. usePagination)
    page,
    nextPage,
    previousPage,
    prepareRow,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination
  );

  const { pageIndex } = state;

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="centering-container">
        <button
          className="button"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous Page
        </button>
        <span className="index">
          {/* Page {pageIndex + 1} of {pageOptions.length}{" "} */}
          {pageIndex + 1} of {pageOptions.length}{" "}
        </span>
        <button
          className="button"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default PaginationTable;
