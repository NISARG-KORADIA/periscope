import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/shared/Button/Button";
import Card from "../../components/shared/Card/Card";
import styles from "./Landing.module.css";
import { ReactComponent as LandingPageIllustration } from "../../svgs/landingPage.svg";
import AuthLayout from "../../layout/AuthLayout/Index";

//if user is not logged in then this is going to be it's landing page and on the click of button he will be redirected to authentication page.

const Landing = () => {
  const navigate = useNavigate();

  function startRegister() {
    navigate("/authenticate");
  }

  return (
    <AuthLayout>
      <button>Let's get started</button>
    </AuthLayout>
  );
};

export default Landing;
