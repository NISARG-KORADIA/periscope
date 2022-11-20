import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useWebRTC } from "../../hooks/useWebRTC";
import { getAllRooms, getRoom } from "../../http";
import { Row, Col, Image, Typography, Card, Button } from "antd";
import {
  AudioMutedOutlined,
  AudioOutlined,
  FullscreenExitOutlined,
} from "@ant-design/icons";
import Layout from "../../layout/Layout/Index";
import styles from "./Room.module.css";
import Loader from "../../components/shared/Loader/Loader";

const { Text } = Typography;

const Room = () => {
  const { id: roomId } = useParams();
  const user = useSelector((state) => state.auth.user);
  // const { clients, provideRef, handleMute } = useWebRTC(roomId, user);
  const [room, setRoom] = useState(null);
  const [isMute, setMute] = useState(true);
  const navigate = useNavigate();

  // const handleManualLeave = () => {
  //   navigate("/home");
  // };

  // useEffect(() => {
  //   // handleMute(isMute, user.id);
  // }, [isMute]);

  useEffect(() => {
    const fetchRoom = async () => {
      const { data } = await getRoom(roomId);
      console.log(data);
      // setRoom(room);
    };

    fetchRoom();
  }, [roomId]);

  const speakers = [
    {
      id: 1,
      name: "Dean Houle",
      avatar: "images/01.png",
      mute: false,
    },
    {
      id: 2,
      name: "Melody Row",
      avatar: "images/02.png",
      mute: false,
    },
    {
      id: 3,
      name: "Will Rehbein",
      avatar: "images/03.png",
      mute: false,
    },
  ]

  const listeners = [
    {
      id: 4,
      name: "Ellen Wheeler",
      avatar: "images/04.png",
      mute: true,
    },
    {
      id: 5,
      name: "John Patrick",
      avatar: "images/05.png",
      mute: true,
    },
    {
      id: 6,
      name: "Dr. Schultz",
      avatar: "images/06.png",
      mute: false,
    },
    {
      id: 7,
      name: "Matilda",
      avatar: "images/07.png",
      mute: true,
    },
    {
      id: 8,
      name: "Magneto",
      avatar: "images/08.png",
      mute: true,
    },
    {
      id: 9,
      name: "Truman Burbank",
      avatar: "images/01.png",
      mute: false,
    }
  ]

  // const user = {
  //   id: 4,
  //   name: "Ellen Wheeler",
  //   avatar: "images/04.png",
  //   mute: true,
  // }

  const host = {
      id: 1,
      name: "Dean Houle",
      avatar: "images/01.png",
      mute: false,
  }

  // const handleMuteClick = (clientId) => {
  //   if (clientId !== user.id) {
  //     return;
  //   }
  //   setMute((prev) => !prev);
  // };

  // const User = (client) => (
  //   <div className={styles.userImg} key={client.id}>
  //     <img
  //       alt="User Profile"
  //       width={80}
  //       className="profile_img"
  //       src={client.avatar}
  //     />
  //     <audio
  //       autoPlay
  //       playsInline
  //       ref={(instance) => {
  //         provideRef(instance, client.id);
  //       }}
  //     />
  //     {client.muted ? (
  //       <div className={styles.muteBtn}>
  //         <AudioMutedOutlined />
  //       </div>
  //     ) : (
  //       <div className={styles.unMuteBtn}>
  //         <AudioOutlined />
  //       </div>
  //     )}
  //     <Text
  //       className="text_gray text_regular_bold"
  //       style={{ fontSize: "12px" }}
  //     >
  //       {client.name}
  //     </Text>
  //   </div>
  // );

  const Header = () => (
    <Row justify="space-between">
      <Col>
        <Text className="text_primary text_bold" style={{ fontSize: "32px" }}>
          {room}
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
      </Col>
      <Col>
        {/* <Button className={styles.leave_btn} onClick={handleManualLeave}>
          <FullscreenExitOutlined /> Leave Quietly
        </Button> */}
      </Col>
    </Row>
  );

  if (user == null) {
    return <Loader message="Setting up things" />;
  }

  // return (
  //   <Layout>
  //     <Row>
  //       <Col span={24} style={{ padding: "1em" }}>
  //         <Header />
  //         <Card
  //           className="bg_secondary theme_card"
  //           style={{ marginTop: "1em" }}
  //         >
  //           <div style={{ padding: "1em" }}>
  //             <Text className="text_primary_dark text_regular_bold">
  //               Speakers
  //             </Text>
  //             <Row style={{ marginTop: "1em" }}>
  //               <Col xs={12} sm={12} md={4} lg={3} xl={3}>
  //                 {clients.map((client) => {
  //                   return <User client={client} />;
  //                 })}
  //               </Col>
  //             </Row>
  //           </div>
  //         </Card>

  //         <Card
  //           className="bg_secondary theme_card"
  //           style={{ marginTop: "1em" }}
  //         >
  //           <div style={{ padding: "1em" }}>
  //             <Text className="text_primary_dark text_regular_bold">
  //               Listeners
  //             </Text>
  //             <Row style={{ marginTop: "1em" }}>
  //               <Col xs={12} sm={12} md={4} lg={3} xl={3}>
  //                 <User />
  //               </Col>
  //             </Row>
  //           </div>
  //         </Card>
  //       </Col>
  //     </Row>
  //   </Layout>
  // );

  return (
    <>
      <div>roomHere</div>
      {room && <p>{room.topic}</p>}
    </>
  );
};

export default Room;
