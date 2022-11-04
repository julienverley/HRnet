import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [
    // {
    //   firstName: "",
    //   lastName: "",
    //   birthDate: "",
    //   startDate: "",
    //   street: "",
    //   city: "",
    //   state: "",
    //   zipCode: "",
    //   department: "",
    // },
    // {
    //   firstName: "Kudi",
    //   lastName: "Znery",
    //   birthDate: "1987-12-14T18:12:22Z",
    //   startDate: "2022-02-05T12:39:52Z",
    //   street: "3540 Southridge Lane",
    //   city: "Main street",
    //   state: "Los Angeles",
    //   zipCode: "11355",
    //   department: "Legal",
    // },
  ],
};

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
  },
});

export const { addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
