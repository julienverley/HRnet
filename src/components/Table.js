import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
// import { number } from "yup";
// import MOCK_DATA from "../data/MOCK_DATA.json";
import { COLUMNS } from "./columns";
import TableGlobalFilter from "./TableGlobalFilter";
import CustomSelect from "./CustomSelect";

//  data is context.employees cf. EmployeesList.js
const Table = ({ data }) => {
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
    // pageSize is used for pagination (number of rows per page)
    setPageSize,
    state,
    // Global Filter
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  // const { pageIndex, pageSize, globalFilter } = state;
  const { pageIndex, globalFilter } = state;

  const pagesOptions = [
    { value: 5, label: "5" },
    { value: 10, label: "10" },
    { value: 25, label: "25" },
    { value: 50, label: "50" },
  ];

  return (
    <>
      <div className="table-header">
        {/* Table search */}
        <TableGlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        {/* Table show a number of employees */}
        <div className="input-container">
          Show number of employees
          <CustomSelect /// Gérer la defaultValue, le placeholder
            value={pagesOptions}
            onChange={(value) => setPageSize(Number(value.value))}
            options={pagesOptions}
          ></CustomSelect>
        </div>
      </div>
      {/* Table */}
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

export default Table;
