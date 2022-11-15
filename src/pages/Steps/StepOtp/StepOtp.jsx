import React, { useState } from "react";
import { verifyOtp } from "../../../http";
import { useSelector } from "react-redux";
import { setAuth } from "../../../store/authSlice";
import { useDispatch } from "react-redux";
import AuthBox from "../../../components/shared/AuthBox/AuthBox";

// Client inserts the OTP value we will then send this to server for verification.
// Upon verification We will redirect the user to thier designated page based on their activation status.

const StepOtp = ({ onNext }) => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();

  const { phone, hash } = useSelector((state) => state.auth.otp);

  async function submit() {
    if (!otp || !phone || !hash) return;
    // Here we are making post request and sending the hash we recieved earlier, otp and hash for verification and server will send the user data in response. Which we will set in global state as well as we will set the isAuth to true.
    try {
      const { data } = await verifyOtp({ otp, phone, hash });

      // console.log(data);
      dispatch(setAuth(data));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AuthBox
      title={`Enter the OTP Recieved`}
      placeHolder="x x x x"
      buttonLabel="Login / Signup"
      buttonFunction={submit}
    />
  );
};

export default StepOtp;
