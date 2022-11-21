import { React, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRoom } from "../../http";
import { useWebRTC } from "../../hooks/useWebRTC";
import Layout from "../../layout/Layout/Index";
import Loader from "../../components/shared/Loader/Loader";
import styles from "./Room.module.css";
import { Typography, Row, Col, Button, Card } from "antd";
import {
  AudioMutedOutlined,
  AudioOutlined,
  FullscreenExitOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";

const { Text } = Typography;
const Room = () => {
  const { id: roomId } = useParams();
  const { user } = useSelector((state) => state.auth);
  
  const [isMuted, setMuted] = useState(true);
  const [room, setRoom] = useState(null);
  const { clients, provideRef, handleMute, localStream } = useWebRTC(
    roomId,
    user
  );

  const navigate = useNavigate();

  const leaveRooom = () => {
    navigate("/home");
  };

  useEffect(() => {
    const fetchRoom = async () => {
      const { data } = await getRoom(roomId);
      setRoom(data);
    };

    fetchRoom();
  }, [roomId]);

  useEffect(() => {
    handleMute(isMuted, user.id);
  }, [isMuted]);

  const unMutePeer = (peer) => {
    if (peer.id === user.id) {
      setMuted(false, peer.id);
    }
  };

  const mutePeer = (peer) => {
    if (peer.id === user.id) {
      setMuted(true, peer.id);
    }
  };

  // ui elements
  const LoadingElement = () => (
    <div className={styles.loadingWrap}>
      <Loader message="Setting things up" />
    </div>
  );

  const Header = () => (
    <Row justify="space-between" align="middle">
      <Col>
        <Text className="text_primary text_bold" style={{ fontSize: "40px" }}>
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
        <Button className={styles.leave_btn} onClick={leaveRooom}>
          <FullscreenExitOutlined /> Leave
        </Button>
      </Col>
    </Row>
  );

  const User = ({ speaker }) => (
    <div className={styles.users}>
      <div className={styles.avatarWrap}>
        <img
          alt="User Profile"
          width={60}
          className="profile_img"
          src={speaker.avatar}
        />
        <audio
          autoPlay
          playsInline
          ref={(instance) => {
            provideRef(instance, speaker.id);
          }}
        />
        {speaker.muted ? (
          <div
            className={`${styles.micBtn} bg_alert`}
            onClick={() => unMutePeer(speaker)}
          >
            <AudioMutedOutlined />
          </div>
        ) : (
          <div
            className={`${styles.micBtn} bg_pastel_green`}
            onClick={() => mutePeer(speaker)}
          >
            <AudioOutlined />
          </div>
        )}
      </div>

      <Text
        className="text_gray text_semi_bold text_primary"
        style={{ fontSize: "10px" }}
      >
        {speaker.name}
      </Text>
    </div>
  );

  return (
    <Layout>
      {room === null ? (
        <LoadingElement />
      ) : (
        <Row>
          <Col span={24} style={{ padding: "1em" }}>
            <Header />
            <Card
              className="bg_secondary theme_card"
              style={{ marginTop: "1em" }}
            >
              <div style={{ padding: "1em" }}>
                <Text className="text_primary_dark text_bold">Speakers</Text>
              </div>
              <Row style={{ marginBlock: "1em" }}>
                {clients.map((speaker) => {
                  return (
                    <Col key={speaker.id} xs={8} sm={8} md={4} lg={3} xl={2}>
                      <User speaker={speaker} />
                    </Col>
                  );
                })}
              </Row>
            </Card>
          </Col>
        </Row>
      )}
    </Layout>
  );
};

export default Room;
