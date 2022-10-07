import * as yup from "yup"; // cf. validation schema
// import { states } from "../data/statesList";

// const stateOptions = states.map((state) => ({
//   value: state.name,
//   label: state.name,
// }));

// const departmentOptions = [
//   { value: "sales", label: "Sales" },
//   { value: "marketing", label: "Marketing" },
//   { value: "engineering", label: "Engineering" },
//   { value: "human_resources", label: "Human Resources" },
//   { value: "legal", label: "Legal" },
// ];

export const yupValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Too short first name")
    .max(20, "Too long")
    .required("First name is required"),
  lastName: yup
    .string()
    .min(2, "Too short last name")
    .max(20, "Too long")
    .required("Last name is required"),
  birthDate: yup.date().required("Birth date is required"), ///
  startDate: yup.date().required("Start date is required"), ///
  street: yup
    .string()
    .min(2, "Too short street name")
    .max(40, "Too long")
    .required("Street is required"),
  city: yup
    .string()
    .min(2, "Too short city name")
    .max(40, "Too long")
    .required("City is required"),
  state: yup ///
    .string()
    .min(2, "Select a department")
    .max(40, "Too long")
    .required("State is required"),
  // .oneOf(stateOptions),
  zipCode: yup
    .string()
    .min(2, "Correct zip code is required")
    .max(12, "Correct zip code is required")
    .required("Zip code is required"),
  department: yup ///
    .string()
    .min(2, "Select a department")
    .max(40, "Too long")
    .required("Department is required"),
  // .oneOf(departmentOptions),
});
