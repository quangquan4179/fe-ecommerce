import React, { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import Headers from "../header/Header";
import { Layout, Menu } from "antd";
const { Header, Content } = Layout;
type RouteType = {
  path: string;
  element: ReactNode;
};
type Props = {
  routes: RouteType[];
};

const Main = ({ routes }: Props) => {
  return (
    <Layout className=" bg-[#F9FAFC]">
     
        <Headers />
     
      <Content>
        <Routes>
          {routes.map((route: RouteType, index: number) => (
            <Route path={route.path} element={route.element} key={index} />
          ))}
        </Routes>
      </Content>
    </Layout>
  );
};
export default Main;
