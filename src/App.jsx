import "./App.css";
import { TicketList } from "./components/tickets/TicketList.jsx";
import { CustomerList } from "./components/customers/CustomersList.jsx";

export const App = () => {
  return (
    <>
      {/*<TicketList />*/}
      <CustomerList />
    </>
  );
};
