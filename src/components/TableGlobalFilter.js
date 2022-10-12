import React from "react";

const TableGlobalFilter = ({ filter, setFilter }) => {
  return (
    <div className="table-filter input-container">
      <input
        placeholder="Filter"
        style={{ fontSize: "1rem", opacity: "1", color: "black" }}
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default TableGlobalFilter;
