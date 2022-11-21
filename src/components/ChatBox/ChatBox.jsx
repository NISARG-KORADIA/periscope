import React from "react";
import { Row, Col, Input, Typography } from "antd";
import { SendOutlined } from "@ant-design/icons";
import UserProfile from "../UserProfile/UserProfile";
import { useSelector } from "react-redux";
import styles from "./ChatBox.module.css";

const { Search } = Input;
const { Text } = Typography;

const ChatBox = () => {
  const { following } = useSelector((state) => state.auth.user);
  const onSearch = (value) => console.log(value);
  return (
    <div className={styles.message_box}>
      <div className={styles.message_inside}>
        <div className={styles.message_scroll}>
          <div className={styles.recive_msg}>
            <Text className={styles.recive_chat}>Hey There</Text>
          </div>
          <div span={24} className={styles.send_msg}>
            <Text className={styles.send_chat}>Hi how are you!!</Text>
          </div>
        </div>
        <Col span={24} className={styles.chat_nput}>
          <Input addonAfter={<SendOutlined />} defaultValue="Hey" />
        </Col>
      </div>
    </div>
  );
};

export default ChatBox;
