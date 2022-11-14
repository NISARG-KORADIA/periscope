import React from "react";
import { Layout } from "antd";
import LeftNavBar from "./Sider";
import styles from "./Layout.module.css";

const { Content, Sider } = Layout;

const Index = ({ children }) => {
  return (
    <Layout className={styles.main_layout}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{ padding: "0.5em" }}
        className="bg_secondary"
      >
        <LeftNavBar />
      </Sider>
      <Content style={{ padding: "1em" }}>{children}</Content>
    </Layout>
  );
};

export default Index;
