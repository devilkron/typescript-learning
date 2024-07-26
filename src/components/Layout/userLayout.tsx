import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import UserNav from "../Navbar/UserNav";

const UserLayout: FC = () => {
  return (
    <Layout className="h-screen font-sans">
        <Header>
      <UserNav />
        </Header>

      <Content className="p-4">
        <Outlet />
      </Content>
    </Layout>
   
  );
};

export default UserLayout;
