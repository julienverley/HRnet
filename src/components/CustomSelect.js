import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

// CustomSelect sets select container, input, option etc. for "States" and "Department" in PageEmployeeForm.js, and "Show number of employees" in Table.js
const CustomSelect = ({
  onChange,
  onBlur,
  options,
  defaultValue,
  className,
}) => {
  const customStyles = {
    indicatorsContainer: (provided) => ({
      ...provided,
      display: "none",
    }),
    container: (provided) => ({
      ...provided,
      width: "15rem",
      height: "2rem",
      borderRadius: 10,
      border: "1px solid #93AD18",
    }),
    input: (provided) => ({
      ...provided,
      padding: "0 0 0 1rem",
      cursor: "pointer",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected ? "#6E850F" : "white",
      opacity: state.isSelected ? 0.6 : 1,
      padding: 20,
      cursor: "pointer",
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 200,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      return { ...provided, opacity, transition };
    },
  };

  return (
    <div className={className}>
      <Select
        defaultValue={defaultValue}
        onChange={(value) => onChange(value)}
        options={options}
        onBlur={onBlur}
        styles={customStyles}
      />
    </div>
  );
};

// PropTypes for CustomSelect
CustomSelect.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  options: PropTypes.array,
  defaultValue: PropTypes.object,
  className: PropTypes.string,
};

export default CustomSelect;
