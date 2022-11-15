import React from "react";
import styles from "./AuthLayout.module.css";
import { Row, Col } from "antd";
// import LandingImage from "/images/LandingPage.png";

const Index = ({ children, imageSource }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img className={styles.logo} src="/images/FullLogo.png" />
        {children}
      </div>
      <div className={styles.illustration}>
        <div className={styles.gradientOverlay} />
        <div className={styles.imageWrap}>
          <img className={styles.image} src={imageSource} />
        </div>
      </div>
    </div>
  );
};

export default Index;
