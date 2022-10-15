import React, { useState } from "react";
import { useFormik } from "formik";
import { yupValidationSchema } from "../schemas/yupValidationSchema"; // import of validation schema
import CustomSelect from "./CustomSelect";
import { states } from "../data/statesList";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "./Modal";
import LastConnexionMessage from "./LastConnexionMessage";

// useContext
// import { employeesListContext } from "../context/ContextProvider";

// Redux
import { useDispatch } from "react-redux";
import { addEmployee } from "../feature/employeesSlice";

const EmployeeCreateForm = () => {
  // useContext
  // const context = React.useContext(employeesListContext);
  // console.log(context);

  // Redux
  const dispatch = useDispatch();

  // react-select departments list:
  const departmentOptions = [
    { value: "sales", label: "Sales" },
    { value: "marketing", label: "Marketing" },
    { value: "engineering", label: "Engineering" },
    { value: "human_resources", label: "Human Resources" },
    { value: "legal", label: "Legal" },
  ];
  // react-select states list:
  const stateOptions = states.map((state) => ({
    value: state.abbreviation,
    label: state.name,
  }));
  // console.log(stateOptions);

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
    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values);
      // Add new employee to the list:
      // useContext
      // context.addEmployee(values);

      // Redux
      // Transform dates from objects to strings
      const birthDate = values.birthDate.toISOString();
      const startDate = values.startDate.toISOString();
      values = { ...values, birthDate, startDate };

      dispatch(addEmployee(values));
      openModal();
      resetForm({ values: "" });
    },
  });

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev); /// toggle modal
  };

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
          {/* Date birth */}
          <div className="birthdate input-container">
            <label htmlFor="birthDate">Birth date</label>
            <DatePicker
              selected={formik.values.birthDate} //
              // value={formik.values.birthDate.toISOString().slice(0, 10)}
              value={formik.values.birthDate}
              onChange={(newDate) => formik.setFieldValue("birthDate", newDate)}
              onBlur={formik.handleBlur}
              dateFormat="yyyy/MM/dd"
              id="birthDate"
              name="birthDate"
            />
          </div>
          {/* Date start */}
          <div className="startdate input-container">
            <label htmlFor="startDate">Start Date</label>
            <DatePicker
              selected={formik.values.startDate}
              value={formik.values.startDate}
              onChange={(newDate) => formik.setFieldValue("startDate", newDate)}
              onBlur={formik.handleBlur}
              dateFormat="yyyy/MM/dd"
              id="startDate"
              name="startDate"
            />
          </div>
        </div>
        {/*  */}
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
          {/* State select */}
          <div className="state input-container">
            <label htmlFor="state">States</label>
            <CustomSelect
              options={stateOptions}
              values={formik.values.state}
              value={formik.values.state}
              defaultValue={stateOptions[0]}
              onChange={(value) => formik.setFieldValue("state", value.value)}
              onBlur={formik.handleBlur}
              type="text"
              id="state"
              name="state"
            ></CustomSelect>
          </div>
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
        <div>
          <div className="department input-container">
            <label htmlFor="department">Department</label>
            <CustomSelect
              options={departmentOptions}
              values={formik.values.department}
              value={formik.values.department}
              defaultValue={departmentOptions[0]}
              onChange={(value) =>
                formik.setFieldValue("department", value.value)
              }
              onBlur={formik.handleBlur}
              type="text"
              id="department"
              name="department"
            />
          </div>
        </div>
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
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        //
        //Change your custom parameters below:
        //
        backgroundColor="#544343"
        borderModal="0px"
        content="Employee added successfully"
        contentcolor="white"
        fontSizeModal="1.8rem"
      />
      <LastConnexionMessage />
    </>
  );
};

export default EmployeeCreateForm;
