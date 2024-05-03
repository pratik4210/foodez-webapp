import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

function SideMenu() {
  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        onClick={(item) => {
          navigate(item.key);
        }}
        items={[
          {
            label: "Dashboard",
            key: "/",
            icon: <AppstoreOutlined />,
          },
          {
            label: "Inventory",
            key: "/Inventory",
            icon: <ShopOutlined />,
          },
          {
            label: "Orders",
            key: "/Orders",
            icon: <ShoppingOutlined />,
          },
          {
            label: "Customers",
            key: "/Customers",
            icon: <UserOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;
