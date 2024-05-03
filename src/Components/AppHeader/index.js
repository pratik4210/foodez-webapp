import { Badge, Image, Space, Typography } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
function AppHeader() {
  return (
    <div className="AppHeader">
      <Image
        width={40}
        src="https://www.google.com/search?sca_esv=b511c58466c4623d&sxsrf=ACQVn0_lAN-Vv1y5HNNPUSACoX3Y7F0Ipg:1714586427643&q=mcgregor&tbm=isch&source=lnms&prmd=invsmbtz&sa=X&ved=2ahUKEwiXhNOXhO2FAxUTRmwGHbq1Bo0Q0pQJegQIDRAB&biw=1920&bih=967&dpr=1#imgrc=MJc9GYiPO3-_fM"
      ></Image>
      <Typography.Title>FoodEz Dashboard</Typography.Title>
      <Space>
        <Badge count={10} dot>
          <MailOutlined style={{ fontSize: 30 }} />
        </Badge>
        <Badge count={10}>
          <BellFilled style={{ fontSize: 30 }} />
        </Badge>
      </Space>
    </div>
  );
}
export default AppHeader;
