import "./App.css";
import { TicketList } from "./components/tickets/TicketList.jsx";
import { CustomerList } from "./components/customers/CustomersList.jsx";
import { EmployeeList } from "./components/employees/EmployeeList.jsx";
import { Route, Routes, Outlet } from "react-router-dom";
import { NavBar } from "./components/nav/NavBar.jsx";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route path="tickets" element={<TicketList />} />
        <Route path="customers" element={<CustomerList />} />
      </Route>
    </Routes>
  );
};
