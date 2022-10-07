import React, { useState } from "react";
import { useFormik, useField, useFormikContext } from "formik";
import { yupValidationSchema } from "../schemas/yupValidationSchema"; // import of validation schema
import { employeesListContext } from "../context/ContextProvider";
import CustomSelect from "./CustomSelect";
import { states } from "../data/statesList";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EmployeeCreateForm = () => {
  const context = React.useContext(employeesListContext); ///
  // console.log(context);

  // react-select:
  const departmentOptions = [
    { value: "sales", label: "Sales" },
    { value: "marketing", label: "Marketing" },
    { value: "engineering", label: "Engineering" },
    { value: "human_resources", label: "Human Resources" },
    { value: "legal", label: "Legal" },
  ];

  // react-select:
  const stateOptions = states.map((state) => ({
    value: state.name,
    label: state.name,
  }));
  // console.log(stateOptions);

  // react-datepicker:
  // const [selectedDate, setSelectedDate] = useState(null);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      birthDate: new Date(),
      startDate: new Date(),
      street: "",
      city: "",
      state: "AL",
      zipCode: "",
      department: "sales",
    },
    validationSchema: yupValidationSchema,
    onSubmit: (values, { resetForm }) => {
      context.addEmployee(values);
      resetForm({ values: "" });
    },
  });
  console.log(formik.values);

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="form-container"
        autoComplete="off"
      >
        {/* First inputs */}
        <div className="container-first-inputs">
          <div className="firstname input-container">
            <label htmlFor="firstName">First Name</label>
            <input
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="firstName"
              name="firstName"
              className={
                formik.errors.firstName && formik.touched.firstName
                  ? "input-error"
                  : "input"
              }
            />
          </div>
          {formik.errors.firstName && formik.touched.firstName && (
            <p className="error-message">{formik.errors.firstName}</p>
          )}
          <div className="lastname input-container">
            <label htmlFor="lastName">Last Name</label>
            <input
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="lastName"
              name="lastName"
              className={
                formik.errors.lastName && formik.touched.lastName
                  ? "input-error"
                  : "input"
              }
            />
          </div>
          {formik.errors.lastName && formik.touched.lastName && (
            <p className="error-message">{formik.errors.lastName}</p>
          )}
          {/*  */}
          {/* Date birth */}
          {/*  */}
          <div className="birthdate input-container">
            <label htmlFor="birthDate">Birth date</label>
            <DatePicker
              value={formik.values.birthDate}
              onChange={(newDate) => formik.setFieldValue("birthDate", newDate)}
              onBlur={formik.handleBlur} /// ? pas sûr de ce qu'il faut mettre ici
              dateFormat="yyyy/MM/dd"
              id="birthDate"
              name="birthDate"
              className={
                formik.errors.birthDate && formik.touched.birthDate
                  ? "input-error"
                  : "input"
              } /// ? ne fonctionne pas
            />
            {/* <input
              value={formik.values.birthDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="date"
              id="birthDate"
              name="birthDate"
              className={
                formik.errors.birthDate && formik.touched.birthDate
                  ? "input-error"
                  : "input"
              }
            /> */}
          </div>
          {formik.errors.birthDate && formik.touched.birthDate && (
            <p className="error-message">{formik.errors.birthDate}</p>
          )}
          {/* /// ? ne fonctionne pas */}
          {/*  */}
          {/* Date start */}
          {/*  */}
          <div className="startdate input-container">
            <label htmlFor="startDate">Start Date</label>
            <DatePicker
              value={formik.values.startDate}
              onChange={(newDate) => formik.setFieldValue("startDate", newDate)}
              onBlur={formik.handleBlur} /// ? pas sûr de ce qu'il faut mettre ici
              dateFormat="yyyy/MM/dd"
              id="startDate"
              name="startDate"
              className={
                formik.errors.startDate && formik.touched.startDate
                  ? "input-error"
                  : "input"
              } /// ? ne fonctionne pas
            />
            {/* <input
              value={formik.values.startDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="date"
              id="startDate"
              name="startDate"
              className={
                formik.errors.startDate && formik.touched.startDate
                  ? "input-error"
                  : "input"
              }
            /> */}
          </div>
          {formik.errors.startDate && formik.touched.startDate && (
            <p className="error-message">{formik.errors.startDate}</p>
          )}
        </div>
        {/* /// ? ne fonctionne pas */}

        {/* Address */}
        <h3>Address</h3>
        <div className="container-address">
          {/* Street */}
          <div className="street input-container">
            <label htmlFor="street">Street</label>
            <input
              value={formik.values.street}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="street"
              name="street"
              className={
                formik.errors.street && formik.touched.street
                  ? "input-error"
                  : "input"
              }
            />
          </div>
          {formik.errors.street && formik.touched.street && (
            <p className="error-message">{formik.errors.street}</p>
          )}
          {/* City */}
          <div className="city input-container">
            <label htmlFor="city">City</label>
            <input
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="city"
              name="city"
              className={
                formik.errors.city && formik.touched.city
                  ? "input-error"
                  : "input"
              }
            />
          </div>
          {formik.errors.city && formik.touched.city && (
            <p className="error-message">{formik.errors.city}</p>
          )}
          {/*  */}
          {/* State select */}
          {/*  */}
          <div className="state input-container">
            <label htmlFor="state">States</label>
            <CustomSelect
              options={stateOptions}
              value={formik.values.state}
              onChange={(value) => formik.setFieldValue("state", value.value)}
              onBlur={formik.handleBlur}
              type="text"
              id="state"
              name="state"
              //   className="input"
              className={
                formik.errors.state && formik.touched.state
                  ? "input-error"
                  : //   : "input"
                    ""
              }
            ></CustomSelect>
          </div>
          {formik.errors.state && formik.touched.state && (
            <p className="error-message">{formik.errors.state}</p>
          )}
          {/* /// */}
          {/* Zip Code */}
          <div className="zipcode input-container">
            <label htmlFor="zipCode">Zip Code</label>
            <input
              value={formik.values.zipCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="zipCode"
              name="zipCode"
              className={
                formik.errors.zipCode && formik.touched.zipCode
                  ? "input-error"
                  : "input"
              }
            />
          </div>
          {formik.errors.zipCode && formik.touched.zipCode && (
            <p className="error-message">{formik.errors.zipCode}</p>
          )}
        </div>
        {/*  */}
        {/* Department */}
        {/*  */}
        <div>
          <div className="department input-container input-container-department">
            <label htmlFor="department">Department</label>
            <CustomSelect
              options={departmentOptions}
              value={formik.values.department}
              onChange={(value) =>
                formik.setFieldValue("department", value.value)
              }
              onBlur={formik.handleBlur}
              type="text"
              id="department"
              name="department"
              className={
                formik.errors.department && formik.touched.department
                  ? "input-error"
                  : // : "input"
                    ""
              }
            />
          </div>
          {formik.errors.department && formik.touched.department && (
            <p className="error-message">{formik.errors.department}</p>
          )}
        </div>
        {/* /// */}
        {/* Submit */}
        <div>
          <button
            className="button"
            disabled={formik.isSubmitting}
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default EmployeeCreateForm;
