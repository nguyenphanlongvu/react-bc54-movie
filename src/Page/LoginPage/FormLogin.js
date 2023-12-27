import React from "react";
import { Button, Form, Input, message } from "antd";
import { https } from "../../Service/config";
import { useDispatch } from "react-redux";
import { SET_INFO } from "../../redux/constant/user";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../redux/action/user";

const FormLogin = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const onFinishV2 = (values) => {
    https

      .post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((res) => {
        console.log(res);
        // đẩy data xuông localStorage khi load trang thì thông tin vẫn còn
        message.success("đăng nhập thành công");
        // đẩy thông tin user lên redux
      })
      .catch((err) => {
        console.log(err);
        message.error("đăng nhập thất bại");
      });
    console.log("Success:", values);
  };
  const onFinish = (values) => {
    dispatch(loginAction(values, navigate));
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
      className="w-1/2"
    >
      <Form.Item
        label="Username"
        name="taikhoan"
        rules={[
          {
            required: true,
            message: "Tài khoản không được bỏ trống",
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
            message: "Mật khẩu không được bỏ trống ",
          },
        ]}
      >
        <Input.Password />
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
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormLogin;
