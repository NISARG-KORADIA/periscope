import React from "react";
import { Menu, Row, Col, Image, Button, Typography } from "antd";
import Message from "../../components/MessageBox/Index";
import { GlobalOutlined, LineChartOutlined, TeamOutlined, SettingOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import styles from "./Layout.module.css";

const { Text } = Typography;
function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}
const items = [
  getItem('All Rooms', '1', <GlobalOutlined />),
  getItem('Popular', '2', <TeamOutlined />),
  getItem('Following', '3', <LineChartOutlined />),
  getItem('Settings', '4', <SettingOutlined />),
];
const rooms = [
  {
    logo: GlobalOutlined,
    name: "Which framework best for frontend ?",
  },
  {
    logo: GlobalOutlined,
    name: "Which framework best for frontend ?",
  },
  {
    logo: GlobalOutlined,
    name: "Which framework best for frontend ?",
  },
  {
    logo: GlobalOutlined,
    name: "Which framework best for frontend ?",
  },
];
const Sider = () => {
  return (
    <>
      <Row justify="center" style={{ marginBottom:"2em", marginTop:"1em" }}>
        <Col flex={2}>
          <div>
            <Image
              width={45}
              className="profile_img"
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            {/* <Avatar /> */}
          </div>
        </Col>
        <Col flex={4} className="profile_text">
          <Text className="text_black text_bold">Mandy Willson</Text>
          <Text className="text_gray text_regular_bold">@mandywillson</Text>
        </Col>
      </Row>
      <Row style={{ marginBottom:"1em" }}>
        <Button type="primary" className="text_black theme_btn" style={{ width:"100%" }}>
        <UsergroupAddOutlined /> Start a room
        </Button>
      </Row>
      <Menu
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
        style={{ marginBottom:"1em" }}
      />
      <Message/>
    </>
  );
};

export default Sider;
