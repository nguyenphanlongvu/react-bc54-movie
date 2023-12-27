import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { https } from "../../Service/config";
import { SET_INFO } from "../../redux/constant/user";
import { TURN_OFF, TURN_ON } from "../../redux/constant/spinner";

const ResgisterPage = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const onFinish = (values) => {
    dispatch({
      type: TURN_ON,
    });
    https
      .post("/api/QuanLyNguoiDung/DangKy", values)
      .then((res) => {
        let dataJSON = JSON.stringify(res.data.content);
        localStorage.setItem("SET_INFO", dataJSON);
        dispatch({
          type: SET_INFO,
          payload: res.data.content,
        });
        message.success("đăng kí thành công ");
        dispatch({
          type: TURN_OFF,
        });
        navigate("/login");
      })
      .catch((err) => {
        dispatch({
          type: TURN_OFF,
        });
        message.error("đăng kí thất bại ");
      });

    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="taikhoan"
        rules={[
          {
            required: true,
            message: "Vui lòng đặt thông tin họ và tên!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="matkhau"
        rules={[
          {
            required: true,
            message: "vui lòng đặt mật khẩu",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập email",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Số Điện Thoại"
        name="soDt"
        rules={[
          {
            required: true,
            message: "vui lòng nhâp số diện thoại",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Họ Và Tên"
        name="hoTen"
        rules={[
          {
            required: true,
            message: "Vui lòng đặt thông tin họ và tên!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          className="bg-orange-600 hover:text-white hover:border-transparent"
          htmlType="submit"
        >
          Đăng kí
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ResgisterPage;
