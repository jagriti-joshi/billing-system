import { useState } from "react";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Billing from "./pages/Billing";
import Customers from "./pages/Customers";
import Invoices from "./pages/Invoices";
import Payments from "./pages/Payments";
import Products from "./pages/Products";
import Reports from "./pages/Reports";

function App() {
  const [currentPage, setCurrentPage] = useState("Dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "Dashboard":
        return <Dashboard />;

      case "Billing":
        return <Billing />;

      case "Customers":
        return <Customers />;

      case "Invoices":
        return <Invoices />;

      case "Payments":
        return <Payments />;

      case "Products":
        return <Products />;

      case "Reports":
        return <Reports />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">

      <Sidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main className="main-content">
        {renderPage()}
      </main>

    </div>
  );
}

export default App;