import React, { useState } from "react";
import Button from "../../../components/shared/Button/Button";
import styles from "./Phone.module.css";
import { sendOtp } from "../../../http/index";
import { useDispatch } from "react-redux";
import { setOtp } from "../../../store/authSlice";

const Phone = ({ onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  async function submit() {
    // if (!phoneNumber) return;
    // let { data } = await sendOtp({ phone: phoneNumber });
    // console.log(data.otp);
    // dispatch(setOtp({ phone: data.phone, hash: data.hash }));
    onNext();
  }

  return (
    <div className="card shadow-3d rouded-corner bg_secondary">
      <p className="text_primary">
        Enter your <br />
        Phone number
      </p>
      <input
        type="text"
        placeholder="+91 xxxxx xxxxx"
        className={`bg_primary_mid rouded-corner shadow-3d-inverse ${styles.input}`}
      ></input>
      <div className={styles.buttonWrapper}>
        <Button
          text="Next"
          onClick={submit}
          buttonColor="bg_primary"
          textColor="text_white"
        />
      </div>
    </div>
  );
};

export default Phone;
