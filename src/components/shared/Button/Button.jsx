import React from "react";
import styles from "./Button.module.css";

// Button component where you have to pass method and button label as an argument.

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
