import React, { useState } from "react";
import Button from "../../../components/shared/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../../store/activateSlice";
import AuthBox from "../../../components/shared/AuthBox/AuthBox";
import AuthLayout from "../../../layout/AuthLayout/Index";

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
    <AuthLayout
      imageSource="/images/NamePage.png"
      overlayText={`Hi! ${fullname}`}
    >
      <AuthBox
        title="What should we call you?"
        placeHolder="Charmi Amipara"
        buttonLabel="Continue"
        buttonFunction={nextStep}
        inputChange={setFullname}
      />
    </AuthLayout>
  );
};

export default StepName;
