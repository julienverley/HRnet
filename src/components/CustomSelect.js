import React from "react";
import { useField } from "formik";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  //   console.log("field", field);
  //   console.log("meta", meta);

  return (
    <>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : "select"}
      />
      {meta.touched && meta.error && (
        <p className="error-message">{meta.error}</p>
      )}
    </>
  );
};
export default CustomSelect;
