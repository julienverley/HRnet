import { BrowserRouter, Routes, Route } from "react-router-dom";
import { pageEmployeeForm, pageEmployeesList } from "./routes";
import PageEmployeeForm from "./pages/PageEmployeeForm";
import PageEmployeesList from "./pages/PageEmployeesList";
import PageError from "./pages/PageError";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path={pageEmployeeForm} element={<PageEmployeeForm />} />
            <Route path={pageEmployeesList} element={<PageEmployeesList />} />
            <Route path="*" element={<PageError />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
