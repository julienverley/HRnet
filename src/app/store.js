import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../feature/employeesSlice";

// export default configureStore({
//   reducer: {
//     employees: employeesReducer,
//   },
// });
// ou encore:

// Reducers can be added to the store using the `reducer` option.
const reducer = {
  employees: employeesReducer,
};

const store = configureStore({
  reducer: reducer,
});
export default store;
