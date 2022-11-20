import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../http";
import { Row, Col, Image, Typography, Button, Avatar } from "antd";
import "./Profile.css";
import Layout from "../../layout/Layout/Index";
import Loader from "../../components/shared/Loader/Loader";
import UserProfile from "../../components/UserProfile/UserProfile";
import { EnvironmentOutlined, ShoppingFilled } from "@ant-design/icons";

const { Text } = Typography;

const Home = () => {
  const { id: userId } = useParams();
  const [user, setUser] = useState(null);
  const [socialUser, setSocialUser] = useState("followes");
 console.log("user", user)
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await getUser(userId);
      setUser(data);
    };

    fetchUser();
  }, [userId]);

  // ui elements
  const LoadingElement = () => (
    <div className="loadingWrap">
      <Loader message="Setting things up" />
    </div>
  );
  return (
    <Layout>
      {user === null ? (
        <LoadingElement />
      ) : (
        <Row>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={16}
            xl={16}
            style={{ padding: "1em" }}
          >
            <Profile user={user} />
            {user?.bio && (
              <Row style={{ marginBottom: "1em" }}>
                <Text className="text_primary " style={{ fontSize: "16px" }}>
                  {user?.bio}
                </Text>
              </Row>
            )}
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
              <div className="custom_radio">
                <div
                  className={`${
                    socialUser === "followes"
                      ? "active_radio"
                      : "inactive_radio"
                  }`}
                  onClick={() => setSocialUser("followes")}
                >
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                  {user?.followers?.length}
                  </span>{" "}
                  Followers
                </div>
                <div
                  className={`${
                    socialUser === "following"
                      ? "active_radio"
                      : "inactive_radio"
                  }`}
                  onClick={() => setSocialUser("following")}
                >
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    {user?.following?.length}
                  </span>{" "}
                  Following
                </div>
              </div>
              <div style={{ marginTop: "2em" }}>
                {socialUser === "followes" && user?.followers &&
                  user?.followers?.map((user) => (
                    <UserProfile
                      key={user.id}
                      name={user.name}
                      avatar={user.avatar}
                      online={user.online}
                    />
                  ))}
                  {socialUser === "following" && user?.following&&
                  user?.following?.map((user) => (
                    <UserProfile
                      key={user.id}
                      name={user.name}
                      avatar={user.avatar}
                      online={user.online}
                    />
                  ))}
              </div>
            </div>
          </Col>
        </Row>
      )}
    </Layout>
  );
};

export default Home;

const Profile = ({ user }) => (
  <Row
    justify="center"
    align="middle"
    style={{ marginBottom: "2em", marginTop: "1em" }}
  >
    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
      <div>
        {user?.avatar ? (
          <Image width={180} className="profile_img" src={user?.avatar} />
        ) : (
          <Avatar />
        )}
      </div>
    </Col>
    <Col xs={24} sm={24} md={12} lg={16} xl={16} className="profile_text">
      {user?.name && (
        <Text className="text_primary text_bold" style={{ fontSize: "32px" }}>
          {user?.name}
        </Text>
      )}
      {user?.location && (
        <Text
          className="text_gray text_regular_bold"
          style={{ fontSize: "16px" }}
        >
          <EnvironmentOutlined />
          &nbsp;&nbsp;{user?.location}
        </Text>
      )}
      {user?.occupation && (
        <Text
          className="text_gray text_regular_bold"
          style={{ fontSize: "16px" }}
        >
          <ShoppingFilled />
          &nbsp;&nbsp;{user?.occupation}
        </Text>
      )}
    </Col>
  </Row>
);
