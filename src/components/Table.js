import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import { COLUMNS } from "./columns";
import TableGlobalFilter from "./TableGlobalFilter";
import CustomSelect from "./CustomSelect";
import PropTypes from "prop-types";

const Table = ({ data }) => {
  const columns = useMemo(() => COLUMNS, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    state,
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
        <div className="input-container table-show">
          Show number of employees
          <CustomSelect
            value={pagesOptions}
            onChange={(value) => setPageSize(Number(value.value))}
            options={pagesOptions}
            defaultValue={pagesOptions[1]}
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

// PropTypes validation
Table.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Table;
