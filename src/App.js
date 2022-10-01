import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeForm from "./pages/EmployeeForm";
import { employeeForm, employeesList } from "./routes";
import EmployeesList from "./pages/EmployeesList";
import Error from "./pages/Error";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path={employeeForm} element={<EmployeeForm />} />
            <Route path={employeesList} element={<EmployeesList />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
