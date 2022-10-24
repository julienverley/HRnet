import { BrowserRouter, Routes, Route } from "react-router-dom";
import { pageEmployeeForm, pageEmployeesList } from "./routes";
import PageEmployeeForm from "./pages/PageEmployeeForm";
import PageEmployeesList from "./pages/PageEmployeesList";
import PageError from "./pages/PageError";
// Redux toolkit:
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={pageEmployeeForm} element={<PageEmployeeForm />} />
            <Route path={pageEmployeesList} element={<PageEmployeesList />} />
            <Route path="*" element={<PageError />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
