import React from "react";
import { Row, Col, Image, Typography } from "antd";
import { CommentOutlined } from "@ant-design/icons";
import UserProfile from "../UserProfile/UserProfile";

const { Text } = Typography;

const ProfileMessage = ({ peers }) => {
  return (
    <>
      <Row justify="space-between">
        <Col flex={2}>
          <div>
            <Text
              className="text_alert text_semi_bold"
              style={{ fontSize: "18px" }}
            >
              <CommentOutlined />
            </Text>
            &nbsp;&nbsp;
            <Text className="text_gray text_bold">Message</Text>
          </div>
        </Col>
        <Col
          flex={4}
          className="text_alert text_bold text_right"
          style={{ fontSize: "18px" }}
        >
          {peers.length}
        </Col>
      </Row>
      <div style={{ padding: "1em" }}>
        {peers.map((peer) => (
          <UserProfile
            key={peer.name}
            name={peer.name}
            avatar={peer.avatar}
            online={peer.online}
          />
        ))}
      </div>
    </>
  );
};

export default ProfileMessage;
