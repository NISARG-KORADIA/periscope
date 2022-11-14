import React, { useState } from "react";
import Email from "./Email/Email";
import Phone from "./Phone/Phone";
import styles from "./StepPhoneEmail.module.css";

// This is the part of the activation page.
// You'll have two option for logging in one is phonw and second is email. You can choose between the two from here.

// Map that will store both the pages.
const phoneEmailMap = {
  phone: Phone,
  email: Email,
};

const StepPhoneEmail = ({ onNext }) => {

  // Default state is phone, we will change the state using setType.
  const [type, setType] = useState("phone");
  const Component = phoneEmailMap[type];

  return (
    <>
      <div className="cardWrapper">
        <div>
          <div className={styles.buttonWrapper}>
            {/* here we are styling the button conditionally depending on the state of the type to highlight the choice. */}
            <button
              className={`
                ${styles.tabButton} 
                ${type === "phone" ? styles.active : ""}
              `}
              onClick={() => setType("phone")}
            >
              <img src="/images/whiteMobile.png" alt="Mobile Icon" />
            </button>
            <button
              className={`
                ${styles.tabButton} 
                ${type === "email" ? styles.active : ""}
              `}
              onClick={() => setType("email")}
            >
              <img src="/images/mailWhite.png" alt="Mail Icon" />
            </button>
          </div>
          <Component onNext={onNext} />
        </div>
      </div>
    </>
  );
};

export default StepPhoneEmail;
