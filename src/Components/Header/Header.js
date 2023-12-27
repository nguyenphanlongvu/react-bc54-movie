import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate();
  // lấy dữ liệu từ redux về
  let user = useSelector((state) => state.userReducer.user);
  console.log("😃 - Header - user:", user);

  let renderMenu = () => {
    if (user) {
      return (
        <>
          <span className="font-medium border border-red-600">
            {user.hoTen}
          </span>
          <button
            className="btn-theme"
            onClick={() => {
              window.location.href = "/login";
              // clear data user localStorage
              localStorage.removeItem("SET_INFO");
            }}
          >
            Đăng xuất
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            className="btn-theme"
            onClick={() => {
              window.location.href = "/register";
            }}
          >
            Đăng kí
          </button>
          <button
            className="btn-theme"
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            Đăng nhập
          </button>
        </>
      );
    }
  };

  return (
    <div className="container h-20 flex items-center justify-between ">
      <span
        onClick={() => {
          navigate("/");
        }}
        className="font-medium text-red-500 text-3xl animate-bounce"
      >
        CyberFlix
      </span>
      <div className="space-x-e">{renderMenu()}</div>
    </div>
  );
}
