import { BrowserRouter, Route,Routes } from "react-router-dom";
import Inventroy from "../Pages/Inventory";
import Customers from "../Pages/Customers";
import Orders from "../Pages/Orders";
import Dashboard from "../Pages/Dashboard";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/"element={<Dashboard />}></Route>
            <Route path="Inventory"element={<Inventroy/>}></Route>
            <Route path="/Orders"element={<Orders/>}></Route>
            <Route path="/Customers"element={<Customers />}></Route>

        </Routes>
    )
}
export default AppRoutes;