import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./RoomCard.module.css";

const RoomCard = ({ room }) => {
  const history = useHistory();

  return (
    <div
      onClick={() => {
        history.push(`/room/${room.id}`);
      }}
      className={styles.card}
    >
      <h3 className={styles.topic}>{room.topic}</h3>
      <div
        className={`${styles.speakers} ${
          room.speakers.length === 1 ? styles.singleSpeaker : ""
        }`}
      >
        <div className={styles.avatars}>
          {room.speakers.map((speaker) => (
            <img key={speaker.id} src={speaker.avatar} alt="avatar" />
          ))}
        </div>
        <div className={styles.names}>
          {room.speakers.map((speaker) => (
            <div key={speaker.id} className={styles.nameWrapper}>
              <span>{speaker.name}</span>
              <img src="images/chatBubble.png" alt="chatBubble" />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.peopleCount}>
        <span>{room.totalPeople}</span>
        <img src="/images/userIcon.png" alt="userIcon" />
      </div>
    </div>
  );
};

export default RoomCard;
