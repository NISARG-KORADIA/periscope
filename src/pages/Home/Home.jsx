import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row, Col } from "antd";
import RoomCard from "../../components/RoomCard/RoomCard";
import { getAllRooms } from "../../http";
import Layout from "../../layout/Layout/Index";
import { useDispatch, useSelector } from "react-redux";
import AddRoomModal from "../../components/AddRoomModal/AddRoomModal";
import { roomModalVisible } from "../../store/roomModalSlice";

const Home = () => {
  const [rooms, setRooms] = useState([]);
  const { roomModalVisibility } = useSelector((state) => state.roomModal);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRooms = async () => {
      const { data } = await getAllRooms();
      setRooms(data);
    };
    fetchRooms();
  }, []);

  function hideRoomModal() {
    dispatch(roomModalVisible(false));
  }

  const showRoomModal = () => {
    dispatch(roomModalVisible(true));
  };

  return (
    <>
      <Layout>
        <div style={{ padding: "1em" }}>
          <Row gutter={[16, 16]}>
            {rooms.map((room) => (
              <Col key={room.id} xs={24} sm={24} md={12} lg={8} xl={8}>
                <RoomCard room={room} />
              </Col>
            ))}
          </Row>
        </div>
        {roomModalVisibility && <AddRoomModal onClose={hideRoomModal} onOpen={showRoomModal}/>}
      </Layout>
    </>
  );
};

export default Home;
