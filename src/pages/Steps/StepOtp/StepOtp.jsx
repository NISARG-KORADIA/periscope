import React, { useState } from "react";
import Button from "../../../components/shared/Button/Button";
import Card from "../../../components/shared/Card/Card";
import TextInput from "../../../components/shared/TextInput/TextInput";
import styles from "./StepOtp.module.css";
import { verifyOtp } from "../../../http";
import { useSelector } from "react-redux";
import { setAuth } from "../../../store/authSlice";
import { useDispatch } from "react-redux";

// Client inserts the OTP value we will then send this to server for verification.
// Upon verification We will redirect the user to thier designated page based on their activation status.

const StepOtp = ({ onNext }) => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();

  const { phone, hash } = useSelector((state) => state.auth.otp);

  async function submit() {
    if(!otp || !phone || !hash) return;
    // Here we are making post request and sending the hash we recieved earlier, otp and hash for verification and server will send the user data in response. Which we will set in global state as well as we will set the isAuth to true.
    try {
      const {data} = await verifyOtp({ otp, phone, hash });
      
      // console.log(data);
      dispatch(setAuth(data));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="cardWrapper">
        <Card title="Enter the OTP recieved." icon="/images/lockEmoji.png">
          <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />
          <div className={styles.actionButtonWrap}>
            <Button onClick={submit} text="Next" />
          </div>
          <p className={styles.bottomParagraph}>
            By entering your number, you’re agreeing to our Terms of Service and
            Privacy Policy. Thanks!
          </p>
        </Card>
      </div>
    </>
  );
};

export default StepOtp;
