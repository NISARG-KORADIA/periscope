import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Room.module.css";
import Layout from "../../layout/Layout/Index";
import Loader from "../../components/shared/Loader/Loader";
import { useState } from "react";
import { getRoom } from "../../http";
import { Typography, Row, Col } from "antd";

const { Text } = Typography;
const Room = () => {
  const { id: roomId } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchRoom = async () => {
      const { data } = await getRoom(roomId);
      setRoom(data);
    };

    fetchRoom();
  }, [roomId]);

  // ui elements
  const LoadingElement = () => (
    <div className={styles.loadingWrap}>
      <Loader message="Setting things up" />
    </div>
  );

  const Header = () => (
    <Row justify="space-between">
      <Col>
        <Text className="text_primary text_bold" style={{ fontSize: "32px" }}>
          {room.topic}
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
            src={room.hostId.avatar}
          />
          <Text
            className="text_primary"
            style={{ fontSize: "12px", marginLeft: "0.5em" }}
          >
            {room.hostId.name}
          </Text>
        </div>
      </Col>
      <Col>
        {/* <Button className={styles.leave_btn} onClick={handleManualLeave}>
          <FullscreenExitOutlined /> Leave Quietly
        </Button> */}
      </Col>
    </Row>
  );

  return (
    <Layout>
      {room === null ? (
        <LoadingElement />
      ) : (
        <Row>
          <Col span={24} style={{ padding: "1em" }}>
            <Header />
          </Col>
        </Row>
      )}
    </Layout>
  );
};

export default Room;
