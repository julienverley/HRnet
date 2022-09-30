import React from "react";
// import { Field, Form, Formik } from "formik";
import { Form, Formik } from "formik";
import { yupValidationSchema } from "../schemas/yupValidationSchema"; // import of validation schema
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import { states } from "../data/statesList";
// import { employeesListContext } from "../context/ContextProvider";
// import ContextProvider from "../context/ContextProvider";

const EmployeeCreateForm = () => {
  // const context = React.useContext(employeesListContext);

  const [initialValues, setInitialValues] = React.useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  ///
  // Add employee to the context
  // context.addEmployee({
  //   firstName: firstName,
  //   lastName: "",
  //   birthDate: new Date(),
  //   startDate: new Date(),
  //   street: "",
  //   city: "",
  //   // state: "AL",
  //   state: "",
  //   zipCode: "",
  //   department: "",
  // });
  ///

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    actions.resetForm();
    console.log(values); // values of the form
    console.log(actions); // actions of the form
  };

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          birthDate: new Date(),
          startDate: new Date(),
          street: "",
          city: "",
          // state: "AL",
          state: "",
          zipCode: "",
          department: "",
        }}
        validationSchema={yupValidationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form-container" autoComplete="off">
            {/* First inputs */}
            <div className="container-first-inputs">
              {/* First name */}
              <div className="input-container">
                <CustomInput
                  label="First name"
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name"
                />
              </div>
              {/* Last name */}
              <div className="input-container">
                <CustomInput
                  label="Last name"
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name"
                />
              </div>
              {/* Birth date */}
              <div className="input-container">
                <CustomInput label="Birth date" name="birthDate" type="date" />
              </div>
              {/* Start date */}
              <div className="input-container">
                <CustomInput label="Start date" name="startDate" type="date" />
              </div>
            </div>

            {/* Address */}
            <h3>Address</h3>
            <div className="container-address">
              {/* Street */}
              <div className="input-container">
                <CustomInput
                  label="Street"
                  name="street"
                  type="text"
                  placeholder="Enter your street"
                />
              </div>
              {/* City */}
              <div className="input-container">
                <CustomInput
                  label="City"
                  name="city"
                  type="text"
                  placeholder="Enter your city"
                />
              </div>
              {/* State */}
              <div className="input-container">
                <CustomSelect label="State" name="state" id="state">
                  {states.map((state, index) => (
                    <option key={index} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </CustomSelect>
              </div>
              {/* Zip Code */}
              <div className="input-container">
                <CustomInput
                  label="Zip Code"
                  name="zipCode"
                  type="number"
                  placeholder="Enter your zip code"
                />
              </div>
            </div>

            {/* Department */}
            <div className="department input-container input-container-department">
              <CustomSelect label="Department" name="department">
                <option value="">Select your department</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Engineering">Engineering</option>
                <option value="Human Ressources">Human Ressources</option>
                <option value="Legal">Legal</option>
              </CustomSelect>
            </div>

            {/* Submit */}
            <div>
              <button className="button" disabled={isSubmitting} type="submit">
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EmployeeCreateForm;
