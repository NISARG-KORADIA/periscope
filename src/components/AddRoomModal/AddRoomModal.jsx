import React, { useState } from "react";
import { Modal, Button, Form, Input, Select, Radio } from "antd";
import { useNavigate } from "react-router-dom";
import { createRoom as create } from "../../http";
// import Button from "../shared/Button/Button";
import styles from "./AddRoomModal.module.css";

const AddRoomModal = ({ onClose, onOpen }) => {
  const navigate = useNavigate();
  const roomType= "public";
  const [topic, setTopic] = useState("");

  async function createRoom() {
    try {
      if (!topic) return;
      const { data } = await create({ topic, roomType });
      navigate(`/room/${data.id}`);
      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  function roomNameInput(e) {
    setTopic(e.target.value);
  }

  async function onFinish (values) {
    try {
      if (!values) return;
      console.log("Success:", values);
      const { data } = await create(values);

      console.log("data", data);
      navigate(`/room/${data.id}`);
    } catch (err) {
      console.log(err);
    }
    onClose();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      title="Start a room"
      open={onOpen}
      onOk={onClose}
      onCancel={onClose}
      footer={false}
    >
      <Form
        name="basic"
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Enter the topic of discussion"
          name="topic"
          onChange={(e) => roomNameInput(e)}
          rules={[
            {
              required: true,
              message: "Please enter the topic of discussion",
            },
            {
              max: 50,
              message: "Max 50 letters allowed",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Tags for the topic"
          name="tags"
          rules={[
            {
              required: true,
              message: "Please add tags of discussion",
            },
            // {
            //   whitespace: true,
            //   message: "White-space are not allowed.",
            // },
            // {
            //   pattern: /^[a-z0-9]+/,
            //   message: "Only small characters and numbers allowed",
            // },
            // {
            //   max: 11,
            //   message: "Max 11 letters allowed",
            // },
          ]}
        >
          <Select
            mode="tags"
            style={{
              width: "100%",
            }}
            // onChange={handleChange}
            tokenSeparators={[","]}
            options={[]}
          />
        </Form.Item>
        <Form.Item name="roomType" label="Select room type">
          <Radio.Group defaultValue={roomType} size="large">
            <Radio.Button value="Public">Public</Radio.Button>
            <Radio.Button value="Private">Private</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 24,
          }}
        >
          <Button
            type="primary"
            className="text_black theme_btn"
            style={{ width: "100%", marginTop: "1em" }}
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddRoomModal;

// <div className={styles.modalMask}>
//   <div className="card shadow-3d rouded-corner bg_secondary">
//     <button onClick={onClose} className={styles.closeButton}>
//       <img src="/images/close.png" alt="close" />
//     </button>
//     <div className={styles.modalHeader}>
//       <h3 className={styles.heading}>Enter the topic of dicussion</h3>
//       <input
//         type="text"
//         onChange={(e) => roomNameInput(e)}
//         className={`bg_primary_mid rouded-corner shadow-3d-inverse ${styles.input}`}
//       ></input>
//       <h2 className={styles.subHeading}>Room types</h2>
//       <div className={styles.roomTypes}>
//         <div
//           title={publicText}
//           onClick={() => setRoomType("public")}
//           className={`${styles.typeBox} ${
//             roomType === "public" ? styles.active : ""
//           }`}
//         >
//           <img src="/images/globe.png" alt="globe" />
//           <span>Public</span>
//         </div>
//         <div
//           title={privateText}
//           onClick={() => setRoomType("private")}
//           className={`${styles.typeBox} ${
//             roomType === "private" ? styles.active : ""
//           }`}
//         >
//           <img src="/images/lock.png" alt="lock" />
//           <span>Private</span>
//         </div>
//       </div>
//     </div>
//     <div className={styles.buttonWrapper}>
//       <Button
//         text="Start the room"
//         onClick={createRoom}
//         buttonColor="bg_powder_orange"
//         textColor="text_primary"
//         className={styles.buttonWrapper}
//       />
//     </div>
//   </div>
// </div>
