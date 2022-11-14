import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/shared/Button/Button";
import styles from "./Landing.module.css";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";

const Landing = () => {
  const navigate = useNavigate();

  function startRegister() {
    navigate("/authenticate");
  }

  return (
    <AuthLayout>
      <div className={styles.contentWrapper}>
        <img className={styles.imageWrap} src="/images/FullLogo.png" />
        <div>
          <h1>An audio only social media platform</h1>
          <p>
            With Periscope, It’s like the internet in a box - the perfect place
            to connect with people and tell your story in full 360 degrees.
          </p>
        </div>
        <div className={styles.buttonWrapper}>
          <Button text={"Let's get started"} />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Landing;
