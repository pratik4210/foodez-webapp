import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "../../Pages/Customers";
import Dashboard from "../../Pages/Dashboard";
import Inventory from "/home/prateekkumar/Documents/Projects/dashboard_for_canteen_system/src/Pages/Inventory/index";
import Orders from "/home/prateekkumar/Documents/Projects/dashboard_for_canteen_system/src/Pages/Orders/index";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="Inventory" element={<Inventory />}></Route>
      <Route path="/Orders" element={<Orders />}></Route>
      <Route path="/Customers" element={<Customers />}></Route>
    </Routes>
  );
}
export default AppRoutes;
