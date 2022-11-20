import React from "react";
import { Menu, Row, Col, Image, Button, Typography } from "antd";
import Messages from "../../components/MessageBox/MessageBox";
import {
  GlobalOutlined,
  LineChartOutlined,
  TeamOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import styles from "./Layout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { roomModalVisible } from "../../store/roomModalSlice";

const { Text } = Typography;

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}

const items = [
  getItem("All Rooms", "1", <GlobalOutlined />),
  getItem("Popular", "2", <TeamOutlined />),
  getItem("Following", "3", <LineChartOutlined />),
  getItem("Settings", "4", <SettingOutlined />),
];

const Profile = ({ image, name, userName }) => (
  <Row justify="start" style={{ marginBottom: "2em", marginTop: "1em" }}>
    <Col style={{ marginRight: "2em" }}>
      <Image width={45} className="profile_img" src={image} />
    </Col>
    <Col className="profile_text">
      <Text className="text_black text_bold">{name}</Text>
      <Text className="text_gray text_regular_bold">{`@${userName}`}</Text>
    </Col>
  </Row>
);

const Sider = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const showRoomModal = () => {
    dispatch(roomModalVisible(true));
  };

  return (
    <>
      <Profile image={user.avatar} name={user.name} userName={user.userName} />
      <Row style={{ marginBottom: "1em" }}>
        <Button
          type="primary"
          className="text_black theme_btn"
          style={{ width: "100%" }}
          onClick={showRoomModal}
        >
          <UsergroupAddOutlined /> Start a room
        </Button>
      </Row>
      <Menu
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
        style={{ marginBottom: "1em" }}
      />
      <Messages />
    </>
  );
};

export default Sider;
