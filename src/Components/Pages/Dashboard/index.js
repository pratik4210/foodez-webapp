import {
  DollarCircleOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";

function Dashboard() {
  return (
    <div>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Order"}
          value={12345}
        />
        <DashboardCard
          icon={
            <ShopOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Inventory"}
          value={12345}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Customers"}
          value={12345}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Revenue"}
          value={12345}
        />
      </Space>
    </div>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
function RecentOrders () {
  return (
    <Table
    columns={[
      {
        title: "title",
        dataIndex: "title"
      },{
        title: "title",
        dataIndex: "title"
      },{
        title: "title",
        dataIndex: "title"
      }
    ]}
    ></Table>
  );
}
export default Dashboard;
