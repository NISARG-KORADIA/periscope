import React from "react";
import { Menu, Row, Col, Image, Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import Messages from "../../components/MessageBox/MessageBox";
import {
  GlobalOutlined,
  LineChartOutlined,
  TeamOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  CommentOutlined,
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

const Sider = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const showRoomModal = () => {
    dispatch(roomModalVisible(true));
  };
  const navigate = useNavigate();

  const items = [
    getItem("All Rooms", "1", <GlobalOutlined />),
    getItem("Popular", "2", <LineChartOutlined />),
    getItem("Following", "3", <TeamOutlined />),
    getItem("Messages", "4", <CommentOutlined />),
    getItem("Settings", "5", <SettingOutlined />),
  ];
  function goToProfile() {
    navigate(`/profile/${user.id}`);
  }

  const Profile = ({ image, name, userName }) => (
    <Row
      justify="start"
      style={{ marginBottom: "2em", marginTop: "1em" }}
      onClick={goToProfile}
    >
      <Col style={{ marginRight: "2em" }}>
        <Image width={45} className="profile_img" src={image}  preview={false}/>
      </Col>
      <Col className="profile_text">
        <Text className="text_black text_bold">{name}</Text>
        <Text className="text_gray text_regular_bold">{`@${userName}`}</Text>
      </Col>
    </Row>
  );
  const onClick = (e) => {
    // console.log(typeof(e.key));
    if (e.key === "1") navigate(`/home`);
    if (e.key === "2") navigate(`/home`);
    if (e.key === "3") navigate(`/home`);
    if (e.key === "4") navigate(`/message`);
    if (e.key === "5") navigate(`/home`);
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
        onClick={onClick}
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
        style={{ marginBottom: "1em" }}
      />
      {/* <Messages /> */}
    </>
  );
};

export default Sider;
