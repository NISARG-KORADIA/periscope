import React, { useState } from "react";
import Button from "../../../components/shared/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../../store/activateSlice";
import styles from "./StepName.module.css";

// Taking input of name and setting it to global state that's it. No server requests.

const StepName = ({ onNext }) => {
  const { name } = useSelector((state) => state.activate);
  const dispatch = useDispatch();

  //Here we are passing name from global state because in case component is re-rendered then it will be able to show the name you have entered last time.
  const [fullname, setFullname] = useState(name);

  function nextStep() {
    // if (!fullname) {
    //   return;
    // }
    // dispatch(setName(fullname));
    onNext();
  }

  return (
    <div className="card shadow-3d rouded-corner bg_secondary">
      <p className="text_primary">What should we call you?</p>
      <input
        type="text"
        placeholder="Charmi Amipara"
        className={`bg_primary_mid rouded-corner shadow-3d-inverse ${styles.input}`}
      ></input>
      <div className={styles.buttonWrapper}>
        <Button
          text="Continue"
          onClick={nextStep}
          buttonColor="bg_primary"
          textColor="text_white"
        />
      </div>
    </div>
  );
};

export default StepName;
