import React from "react";
import styles from "./AuthLayout.module.css";
import { Row, Col } from "antd";
// import LandingImage from "/images/LandingPage.png";

const Index = ({ children }) => {
  return (
    <Row className={styles.wrapper}>
      <Col sm={{ span: 24, order: 2 }} md={{ span: 11, order: 1 }}>
        {children}
      </Col>
      <Col
        sm={{ span: 24, order: 1 }}
        md={{ span: 13, order: 2 }}
        className={styles.imageWrapper}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img
          src="/images/LandingPage.png"
          alt="LandingPage"
          style={{ height: "100%", width: "auto" }}
        />
      </Col>
    </Row>
  );
};

export default Index;
