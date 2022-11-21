import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Modal, Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../http";
import { createRoom as create } from "../../http";
import { PlusOutlined } from '@ant-design/icons';
// import Button from "../shared/Button/Button";
const { TextArea } = Input;


const EditeProfile = ({ onClose, onOpen }) => {
  const navigate = useNavigate();
  const { id: userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await getUser(userId);
      setUser(data);
    };

    fetchUser();
  }, [userId]);

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
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <div>Your name:</div>
        <Form.Item
          name="name"
          noStyle
          rules={[
            {
              required: true,
              message: "Please enter the name",
            }
          ]}
        >
          <Input />
        </Form.Item>
        <div>Location:</div>
        <Form.Item
          name="location"
          noStyle
          rules={[
            {
              required: true,
              message: "Please enter the location",
            }
          ]}
        >
          <Input />
        </Form.Item>
        <div>Occupation:</div>
        <Form.Item
          name="location"
          noStyle
          rules={[
            {
              required: true,
              message: "Please enter the occupation",
            } 
          ]}
        >
          <Input />
        </Form.Item>
        <div>Biodata:</div>
        <Form.Item
          name="location"
          noStyle
          rules={[
            {
              required: true,
              message: "Please enter the biodata",
            }
          ]}
        >
          <TextArea />
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
            Edit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditeProfile;