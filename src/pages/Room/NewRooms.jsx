import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useWebRTC } from "../../hooks/useWebRTC";
import { getAllRooms, getRoom } from "../../http";
import { Row, Col, Image, Typography, Card } from "antd";
import { AudioMutedOutlined, AudioOutlined } from "@ant-design/icons";
import Layout from "../../layout/Layout/Index";
import UserProfile from "../../components/UserProfile/UserProfile";
import styles from "./Room.module.css";

const { Text } = Typography;

const Room = () => {
  //   const { id: roomId } = useParams();
  //   const user = useSelector((state) => state.auth.user);
  //   const { clients, provideRef, handleMute } = useWebRTC(roomId, user);
  //   const [room, setRoom] = useState("Title");
  //   const [isMute, setMute] = useState(true);
  //   const navigate = useNavigate();

  //   const handleManualLeave = () => {
  //     navigate("/home");
  //   };

  //   useEffect(() => {
  //     handleMute(isMute, user.id);
  //   }, [isMute]);

  //   useEffect(() => {
  //     const fetchRoom = async () => {
  //       const { data } = await getRoom(roomId);
  //       setRoom((prev) => data.topic);
  //     };

  //     fetchRoom();
  //   }, [roomId]);

  //   const handleMuteClick = (clientId) => {
  //     if (clientId !== user.id) {
  //       return;
  //     }
  //     setMute((prev) => !prev);
  //   };

  return (
    <Layout>
      <Row>
        <Col span={24} style={{ padding: "1em" }}>
          <Header />
          <Card
            className="bg_secondary theme_card"
            style={{ marginTop: "1em" }}
          >
            <div style={{ padding: "1em" }}>
              <Text className="text_primary_dark text_regular_bold">
                Speakers
              </Text>
              <Row style={{ marginTop: "1em" }}>
                <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                  <User />
                </Col>
              </Row>
            </div>
          </Card>

          <Card
            className="bg_secondary theme_card"
            style={{ marginTop: "1em" }}
          >
            <div style={{ padding: "1em" }}>
              <Text className="text_primary_dark text_regular_bold">
                Listeners
              </Text>
              <Row style={{ marginTop: "1em" }}>
                <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                  <User />
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default Room;
const Header = () => (
  <div>
    <Text className="text_primary text_bold" style={{ fontSize: "32px" }}>
      Mandy Willson
    </Text>
    <div style={{ display: "flex", alignItems: "center" }}>
      <Text
        className="text_primary text_semi_bold"
        style={{ fontSize: "12px", marginRight: "0.5em" }}
      >
        Hosted by:
      </Text>
      <img
        alt="User Profile"
        width={20}
        className="profile_img"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <Text
        className="text_primary"
        style={{ fontSize: "12px", marginLeft: "0.5em" }}
      >
        Ellen Wheeler
      </Text>
    </div>
  </div>
);

const User = () => (
  <div className={styles.userImg}>
    <img
      alt="User Profile"
      width={80}
      className="profile_img"
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
    <div className={styles.muteBtn}>
      <AudioMutedOutlined />
    </div>
    <div className={styles.unMuteBtn}>
      <AudioOutlined />
    </div>
  </div>
);
