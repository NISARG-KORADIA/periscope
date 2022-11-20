import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRoom as create } from "../../http";
import Button from "../shared/Button/Button";
import styles from "./AddRoomModal.module.css";

const AddRoomModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [roomType, setRoomType] = useState("public");
  const [topic, setTopic] = useState("");
  const publicText = "This Room will be visible in explore section";
  const privateText = "People need to use the link of this room to join in";

  async function createRoom() {
    try {
      if (!topic) return;
      const { data } = await create({ topic, roomType });
      navigate(`/room/${data.id}`);
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  function roomNameInput(e) {
    setTopic(e.target.value);
  }

  return (
    <div className={styles.modalMask}>
      <div className="card shadow-3d rouded-corner bg_secondary">
        <button onClick={onClose} className={styles.closeButton}>
          <img src="/images/close.png" alt="close" />
        </button>
        <div className={styles.modalHeader}>
          <h3 className={styles.heading}>Enter the topic of dicussion</h3>
          <input
            type="text"
            onChange={(e) => roomNameInput(e)}
            className={`bg_primary_mid rouded-corner shadow-3d-inverse ${styles.input}`}
          ></input>
          <h2 className={styles.subHeading}>Room types</h2>
          <div className={styles.roomTypes}>
            <div
              title={publicText}
              onClick={() => setRoomType("public")}
              className={`${styles.typeBox} ${
                roomType === "public" ? styles.active : ""
              }`}
            >
              <img src="/images/globe.png" alt="globe" />
              <span>Public</span>
            </div>
            <div
              title={privateText}
              onClick={() => setRoomType("private")}
              className={`${styles.typeBox} ${
                roomType === "private" ? styles.active : ""
              }`}
            >
              <img src="/images/lock.png" alt="lock" />
              <span>Private</span>
            </div>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <Button
            text="Start the room"
            onClick={createRoom}
            buttonColor="bg_powder_orange"
            textColor="text_primary"
            className={styles.buttonWrapper}
          />
        </div>
      </div>
    </div>
  );
};

export default AddRoomModal;
