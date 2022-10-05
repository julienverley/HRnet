import React from "react";

const TableGlobalFilter = ({ filter, setFilter }) => {
  return (
    <div className="table-filter input-container">
      {/* Search{" "} */}
      <input
        placeholder="Filter"
        // placeholderTextColor="#000"
        style={{ fontSize: "1rem", opacity: "1", color: "black" }}
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default TableGlobalFilter;
