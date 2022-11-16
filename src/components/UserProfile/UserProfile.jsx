import React from "react";
import { Row, Col, Image, Typography } from "antd";

const { Text } = Typography;

const UserProfile = ({ room }) => {
  // const history = useHistory();

  return (
    <Row align="middle" style={{ marginBottom: "1em", flexBasis:"row" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          width={35}
          className="profile_img"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        {/* <Avatar /> */}
      </div>
      <div className="profile_text" style={{ marginLeft: "0.5em"}}>
        <Text className="text_black text_bold">Mandy Willson</Text>
        <Text className="text_gray text_regular_bold" style={{fontSize:"12px"}}>Available to chat</Text>
      </div>
    </Row>
  );
};

export default UserProfile;