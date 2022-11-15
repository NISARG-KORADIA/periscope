import React, { useState } from "react";
import { sendOtp } from "../../../http/index";
import { useDispatch } from "react-redux";
import { setOtp } from "../../../store/authSlice";
import AuthBox from "../../../components/shared/AuthBox/AuthBox";

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
    <AuthBox
      title={`Enter your phone number`}
      placeHolder="+91 xxxxx xxxxx"
      buttonLabel="Next"
      buttonFunction={submit}
    />
  );
};

export default Phone;
