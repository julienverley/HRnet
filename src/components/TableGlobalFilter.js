import React from "react";
import PropTypes from "prop-types";

// TableGlobalFilter organizes filter settings
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

// PropTypes
TableGlobalFilter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};

export default TableGlobalFilter;
