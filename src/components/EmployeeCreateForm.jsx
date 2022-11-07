import React, { useState } from "react";
import { useFormik } from "formik";
import { yupValidationSchema } from "../schemas/yupValidationSchema"; // import of validation schema
import CustomSelect from "./CustomSelect";
import { states } from "../data/statesList";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from "react_modal_julfrontdev"; // NPM Modal package
import LastConnexionMessage from "./LastConnexionMessage";
import { useDispatch } from "react-redux";
import { addEmployee } from "../feature/employeesSlice";

// EmployeeCreateForm gets values from the form, using Formik
const EmployeeCreateForm = () => {
  const dispatch = useDispatch();

  // React-select departments list:
  const departmentOptions = [
    { value: "sales", label: "Sales" },
    { value: "marketing", label: "Marketing" },
    { value: "engineering", label: "Engineering" },
    { value: "human_resources", label: "Human Resources" },
    { value: "legal", label: "Legal" },
  ];
  // React-select states list:
  const stateOptions = states.map((state) => ({
    value: state.abbreviation,
    label: state.name,
  }));

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
      setSubmitting(true);
      // Transform dates from objects to strings
      const birthDate = values.birthDate.toISOString();
      const startDate = values.startDate.toISOString();
      values = { ...values, birthDate, startDate };
      // Redux dispatch action to add new employee to the list of employees
      dispatch(addEmployee(values));
      openModal();
      resetForm({ values: "" });
    },
  });

  // Modal props: showModal, setShowModal, to toggle the modal
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
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
          {/* Birth date */}
          <div className="birthdate input-container">
            <label htmlFor="birthDate">Birth date</label>
            <DatePicker
              selected={formik.values.birthDate}
              value={formik.values.birthDate}
              onChange={(newDate) => formik.setFieldValue("birthDate", newDate)}
              onBlur={formik.handleBlur}
              dateFormat="yyyy/MM/dd"
              id="birthDate"
              name="birthDate"
              className={
                formik.errors.birthDate && formik.touched.birthDate
                  ? "input-error"
                  : "input"
              }
            />
          </div>
          {formik.errors.birthDate && formik.touched.birthDate && (
            <p className="error-message">{formik.errors.birthDate}</p>
          )}
          {/* Start date */}
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
              className={
                formik.errors.startDate && formik.touched.startDate
                  ? "input-error"
                  : "input"
              }
            />
          </div>
          {formik.errors.startDate && formik.touched.startDate && (
            <p className="error-message">{formik.errors.startDate}</p>
          )}
        </div>
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
        {/* Department select */}
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
        modalBackgroundColor="#544343"
        modalCloseButton="Close modal"
        modalContentColor="white"
        modalBorder="0px"
        modalFontSize="1.8rem"
        modalStaticTextContentFirstPart="Employee"
        modalStaticTextContentLastPart="added successfully"
      />
      <LastConnexionMessage />
    </>
  );
};

export default EmployeeCreateForm;
