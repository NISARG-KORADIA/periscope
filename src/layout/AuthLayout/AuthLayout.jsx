import React from "react";
import styles from "./AuthLayout.module.css";
import { Row, Col } from "antd";
import { ReactComponent as LandingPageIllustration } from "../../svgs/landingPage.svg";

const AuthLayout = ({ children }) => {
  return (
    <Row className={styles.wrapper}>
      <Col sm={{ span: 24, order: 2 }} md={{ span: 11, order: 1 }}>
        {children}
      </Col>
      <Col sm={{ span: 24, order: 1 }} md={{ span: 11, order: 2 }}>
        <div className={styles.imageWrapper}>
          <img src="/images/LandingPage.png" />
        </div>
      </Col>
    </Row>
  );
};

export default AuthLayout;
