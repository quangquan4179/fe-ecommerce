import React, { ReactNode } from "react";
import { observer } from "mobx-react-lite";
import "./sidebar.css";
import { Layout, Menu } from "antd";
import ListItem from "./ListItem";

const { Header, Content, Footer, Sider } = Layout;

type RouteType = {
  path: string;
  name: string;
  element: ReactNode;
};
type Props = {
  title: string;
  routes: RouteType[];
};
type SidebarProps = {
  OurRoutes: Props[];
};
const Sidebar = (props: SidebarProps) => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        // console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        // console.log(collapsed, type);
      }}
      style={{
        position:"sticky"
      }}
      
      className=" siderbar top-0 left-0  bg-[rgb(17,24,39)] lg:overflow-auto h-screen  "
    >

   
       <div className="sidebar__logo h-40 border-b border-[rgb(45,55,72)]">
          logo
        </div>
        <div className="sidebar__list-box p-4">
          {props.OurRoutes.map((routes: Props, index: number) => (
            <ListItem routes={routes.routes} title={routes.title} key={index} />
          ))}
        </div>
        <div className="sidebar__footer">
          <div className=" text-[#FFF]">Need Help?</div>
          <p className="text-[rgb(93,114,105)] font-thin">Check our docs</p>
          <button className="bg-[rgb(16,185,129)] w-full rounded-lg h-10 mt-4 text-[#FFF]">
            Ducumentation
          </button>
        </div>
    </Sider>
  );
};

export default observer(Sidebar);
