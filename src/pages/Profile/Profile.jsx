import React, { useEffect, useState } from "react";
import { Row, Col, Image, Typography, Button, Radio } from "antd";
import styles from "./Profile.module.css";
import Layout from "../../layout/Layout/Index";
import UserProfile from "../../components/UserProfile/UserProfile";
import { EnvironmentOutlined, ShoppingFilled } from "@ant-design/icons";

const { Text } = Typography;

const Home = () => {
  return (
    <Layout>
      <Row>
        <Col xs={24} sm={24} md={12} lg={16} xl={16} style={{ padding: "1em" }}>
          <Profile />
          <Row style={{ marginBottom: "1em" }}>
            <Text className="text_primary " style={{ fontSize: "16px" }}>
              I'm a designer by trade who seeks to inspire with my work,
              collaborate with inspiring people and learn to create in this new
              metaverse age. Find me on Instagram, Twitter, Facebook and YouTube
              as @mandywillson.
            </Text>
          </Row>
          <Row>
            <Button size="large" className="bg_primary text_white blue_btn">
              Edit Profile
            </Button>
          </Row>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={8}
          xl={8}
          className="bg_secondary"
          style={{ height: "100vh" }}
        >
          <div style={{ padding: "1.5em" }}>
            <div className={styles.custom_radio}>
            <div className={styles.active_radio}><span style={{fontWeight:"bold", fontSize:"18px"}}>100</span> Followers</div>
            <div className={styles.inactive_radio}><span style={{fontWeight:"bold", fontSize:"18px"}}>100</span> Following</div>
            </div>
            <div style={{ marginTop: "2em" }}>
              <UserProfile />
              <UserProfile />
              <UserProfile />
              <UserProfile />
            </div>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default Home;

const Profile = () => (
  <Row
    justify="center"
    align="middle"
    style={{ marginBottom: "2em", marginTop: "1em" }}
  >
    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
      <div>
        <Image
          width={200}
          className="profile_img"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        {/* <Avatar /> */}
      </div>
    </Col>
    <Col xs={24} sm={24} md={12} lg={16} xl={16} className="profile_text">
      <Text className="text_primary text_bold" style={{fontSize:"32px"}}>Mandy Willson</Text>
      <Text className="text_gray text_regular_bold" style={{fontSize:"16px"}}><EnvironmentOutlined />&nbsp;&nbsp;Melbourne, Australia</Text>
      <Text className="text_gray text_regular_bold" style={{fontSize:"16px"}}><ShoppingFilled />&nbsp;&nbsp;Designer</Text>
    </Col>
  </Row>
);
