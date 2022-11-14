import React, { useState } from "react";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepOtp from "../Steps/StepOtp/StepOtp";

// This are the two components which I've written about below.
const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
};

// This component is made of two components on is to choose you activation method phone or email and then insert your credential for your choosen method.
// Second, enter the otp that you've recieved and you will be redirected to the page based on your profile activation staturs.
// In this step we basically log in user and so we send recieved tokens to server and .

const Authenticate = () => {
  
  const [step, setStep] = useState(1);
  const Step = steps[step];

  function onNext() {
    setStep(step + 1);
  }

  return <Step onNext={onNext} />;

};

export default Authenticate;
