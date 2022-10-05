import React from "react";
import Select from "react-select";

const CustomSelect = ({ onChange, options, values, className }) => {
  const defaultValue = (options, values) => {
    return options ? options.find((option) => option.value === values) : "";
  };
  return (
    <div className={className}>
      <Select
        value={defaultValue(options, values)}
        onChange={(value) => onChange(value)}
        options={options}
      />
    </div>
  );
};

export default CustomSelect;
