import { Space } from "antd";
import "./App.css";
import SideMenu from "./Components/SideMenu";
import PageContent from "./Components/PageContent";
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
function App() {
  return (
    <div className="App">
      <AppHeader />
      <Space className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </Space>
      <AppFooter />
    </div>
  );
}
export default App;
