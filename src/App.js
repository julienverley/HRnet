import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeCreate from "./pages/EmployeeCreate";
import { employeeCreate, employeeList } from "./routes";
import EmployeeList from "./pages/EmployeeList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={employeeCreate} element={<EmployeeCreate />} />
          <Route path={employeeList} element={<EmployeeList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
