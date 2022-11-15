import React from "react";
import { useState } from "react";
import AuthBox from "../../../components/shared/AuthBox/AuthBox";
import AuthLayout from "../../../layout/AuthLayout/Index";

const StepUsername = ({ onNext }) => {
  const [userName, setUserName] = useState("");

  return (
    <AuthLayout imageSource="/images/UserNamePage.png" overlayText={userName}>
      <AuthBox
        title="Let’s get a username that's all yours"
        placeHolder="JamesBond007"
        buttonLabel="Continue"
        inputChange={setUserName}
        buttonFunction={onNext}
      />
    </AuthLayout>
  );
};

export default StepUsername;
