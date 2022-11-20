import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row, Col } from "antd";
import RoomCard from "../../components/RoomCard/RoomCard";
import { getAllRooms } from "../../http";
import styles from "./Home.module.css";
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

  function hideModal() {
    dispatch(roomModalVisible(false));
  }

  return (
    <>
      <Layout>
        <div style={{ padding: "1em" }}>
          <Row gutter={[16, 16]}>
            {/* {rooms.map((room) => ( */}
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <RoomCard />
            </Col>
            {/* ))} */}
          </Row>
        </div>
        {roomModalVisibility && <AddRoomModal onClose={hideModal} />}
      </Layout>
    </>
  );
};

export default Home;
