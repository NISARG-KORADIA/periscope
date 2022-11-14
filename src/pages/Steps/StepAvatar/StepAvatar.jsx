import React, { useState } from "react";
import Card from "../../../components/shared/Card/Card";
import Button from "../../../components/shared/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import styles from "./StepAvatar.module.css";
import { setAvatar } from "../../../store/activateSlice";
import { activate } from "../../../http/index";
import { setAuth } from "../../../store/authSlice";
import Loader from "../../../components/shared/Loader/Loader";
import { useEffect } from "react";

// This is one of the completed page of auth-flow.
// We are doing many complex task here like uploading image, setting it to global state (c) and then seding all of this information to the server which we

const StepAvatar = ({ onNext }) => {
  const { name, avatar } = useSelector((state) => state.activate);
  const [image, setImage] = useState("/images/monkeyAvatar.png");
  const [loading, setLoading] = useState(false);
  const [unmounted, setUnmounted] = useState(false);
  const dispatch = useDispatch();

  function captureImage(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    // readAsDataURL is a function that will convert image into data URL so we can use this to display uploaded image.
    // We are not passing this image file to the image tag because we can't file as source of image tag so we pass and data URL.
    reader.readAsDataURL(file);
    // as soon as we finish reading we will set this image to global state as well as in local variable that is used for displaying the image.
    reader.onloadend = function () {
      dispatch(setAvatar(reader.result));
      setImage(reader.result);
    };
  }

  async function submit() {
    if (!avatar || !name) return;

    setLoading(true);
    // Here we will send the post request with name and avatar and wait for server to return the response containing user data.
    // From the data we will set the user to global state's user. See the auth function.
    try {
      const { data } = await activate({ name, avatar });

      if (data.auth && !unmounted) {
        dispatch(setAuth(data));
      }
      // console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    return () => {
      setUnmounted(false);
    };
  }, []);

  if (loading) return <Loader message="Activating..." />;

  return (
    <>
      <Card title={`Hi! ${name}`} icon="/images/monkeyEmoji.png">
        <p className={styles.subHeading}>Upload your photo.</p>
        <div className={styles.avatarWrapper}>
          <img className={styles.avatarImage} src={image} alt="avatar" />
        </div>
        <div>
          <input
            onChange={captureImage}
            type="file"
            id="avatarInput"
            className={styles.avatarInput}
          />
          <label htmlFor="avatarInput" className={styles.avatarLabel}>
            Choose a different Photo
          </label>
        </div>
        <div>
          <Button onClick={submit} text="Next" />
        </div>
      </Card>
    </>
  );
};

export default StepAvatar;
