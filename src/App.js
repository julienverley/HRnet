import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeForm from "./pages/EmployeeForm";
import { employeeForm, employeeList } from "./routes";
import EmployeeList from "./pages/EmployeeList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={employeeForm} element={<EmployeeForm />} />
          <Route path={employeeList} element={<EmployeeList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
