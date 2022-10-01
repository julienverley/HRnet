import React from "react";
import { Form, Formik } from "formik";
import { yupValidationSchema } from "../schemas/yupValidationSchema"; // validation schema
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import { states } from "../data/statesList";
import { employeesListContext } from "../context/ContextProvider";
// import AtomSubmitButton from "./atoms/AtomSubmitButton";

const EmployeeCreateForm = () => {
  const context = React.useContext(employeesListContext);
  console.log(context);

  const onSubmit = (values) => {
    context.addEmployee(values);
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
                  <option value="">Select your state</option>
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
            {/* <div> /// 
              <AtomSubmitButton disabled={isSubmitting} />
            </div> */}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EmployeeCreateForm;
