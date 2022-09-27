import React from "react";
import { useFormik } from "formik";
import { yupValidationSchema } from "../schemas/yupValidationSchema"; // import of validation schema

const onSubmit = async (values, actions) => {
  // console.log("Submitted form");
  await new Promise((resolve) => setTimeout(resolve, 500));
  actions.resetForm();
  console.log(values);
  console.log(actions);
};

const EmployeeCreateForm = () => {
  // Formik hook
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      birthDate: new Date(),
      startDate: new Date(),
      street: "",
      city: "",
      state: "AL",
      zipCode: "",
      department: "Sales",
    },
    validationSchema: yupValidationSchema,
    onSubmit,
  });

  console.log(errors);
  console.log(values);

  return (
    <form onSubmit={handleSubmit} className="form-container" autoComplete="off">
      {/* First inputs */}
      <div className="container-first-inputs">
        <div className="firstname input-container">
          <label htmlFor="firstName">First Name</label>
          <input
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="firstName"
            name="firstName"
            className={
              errors.firstName && touched.firstName ? "input-error" : "input"
            }
          />
        </div>
        {errors.firstName && touched.firstName && (
          <p className="error-message">{errors.firstName}</p>
        )}
        <div className="lastname input-container">
          <label htmlFor="lastName">Last Name</label>
          <input
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="lastName"
            name="lastName"
            className={
              errors.lastName && touched.lastName ? "input-error" : "input"
            }
          />
        </div>
        {errors.lastName && touched.lastName && (
          <p className="error-message">{errors.lastName}</p>
        )}

        {/*  */}
        <div className="birthdate input-container">
          <label htmlFor="birthDate">Date of Birth</label>
          <input
            value={values.birthDate}
            onChange={handleChange}
            onBlur={handleBlur}
            type="date"
            id="birthDate"
            name="birthDate"
            className={
              errors.birthDate && touched.birthDate ? "input-error" : "input"
            }
          />
        </div>
        {errors.birthDate && touched.birthDate && (
          <p className="error-message">{errors.birthDate}</p>
        )}

        {/*  */}
        <div className="startdate input-container">
          <label htmlFor="startDate">Start Date</label>
          <input
            value={values.startDate}
            onChange={handleChange}
            onBlur={handleBlur}
            type="date"
            id="startDate"
            name="startDate"
            className={
              errors.startDate && touched.startDate ? "input-error" : "input"
            }
          />
        </div>
        {errors.startDate && touched.startDate && (
          <p className="error-message">{errors.startDate}</p>
        )}
      </div>

      {/* Address */}
      <h3>Address</h3>
      <div className="container-address">
        {/* Street */}
        <div className="street input-container">
          <label htmlFor="street">Street</label>
          <input
            value={values.street}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="street"
            name="street"
            className={
              errors.street && touched.street ? "input-error" : "input"
            }
          />
        </div>
        {errors.street && touched.street && (
          <p className="error-message">{errors.street}</p>
        )}
        {/* City */}
        <div className="city input-container">
          <label htmlFor="city">City</label>
          <input
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="city"
            name="city"
            className={errors.city && touched.city ? "input-error" : "input"}
          />
        </div>
        {errors.city && touched.city && (
          <p className="error-message">{errors.city}</p>
        )}
        {/* State - select (pas input) */}
        <div className="state input-container">
          <label htmlFor="state">State</label>
          <select
            value={values.state}
            onChange={handleChange}
            onBlur={handleBlur}
            name="state"
            id="state"
            className={errors.state && touched.state ? "input-error" : "select"}
          >
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AK">etc.</option>
            {/* etc. A rendre dynamique */}
          </select>
        </div>
        {errors.state && touched.state && (
          <p className="error-message">{errors.state}</p>
        )}
        {/* Zip Code */}
        <div className="zipcode input-container">
          <label htmlFor="zipCode">Zip Code</label>
          <input
            value={values.zipCode}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="zipCode"
            name="zipCode"
            className={
              errors.zipCode && touched.zipCode ? "input-error" : "input"
            }
          />
        </div>
        {errors.zipCode && touched.zipCode && (
          <p className="error-message">{errors.zipCode}</p>
        )}
      </div>
      {/* Department */}
      <div>
        <div className="department input-container input-container-department">
          <label htmlFor="department">Department</label>
          <input
            value={values.department}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            id="department"
            name="department"
            className={
              errors.department && touched.department ? "input-error" : "input"
            }
          />
        </div>
        {errors.department && touched.department && (
          <p className="error-message">{errors.department}</p>
        )}
      </div>

      {/* Submit */}
      <div>
        <button className="button" disabled={isSubmitting} type="submit">
          Save
        </button>
      </div>
    </form>
  );
};

export default EmployeeCreateForm;
