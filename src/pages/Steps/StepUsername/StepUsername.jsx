import React from "react";
import Button from "../../../components/shared/Button/Button";
import styles from "./StepUsername.module.css";

const StepUsername = ({ onNext }) => {
  return (
    <div className="card shadow-3d rouded-corner bg_secondary">
      <p className="text_primary">
        Let’s get a username
        <br />
        that's all yours
      </p>
      <input
        type="text"
        placeholder="JamesBond007"
        className={`bg_primary_mid rouded-corner shadow-3d-inverse ${styles.input}`}
      ></input>
      <div className={styles.buttonWrapper}>
        <Button
          text="Continue"
          onClick={onNext}
          buttonColor="bg_primary"
          textColor="text_white"
        />
      </div>
    </div>
  );
};

export default StepUsername;
