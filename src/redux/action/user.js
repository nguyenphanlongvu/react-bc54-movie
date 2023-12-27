import { message } from "antd";

import { https } from "../../Service/config";
import { SET_INFO } from "../../redux/constant/user";
import { TURN_OFF, TURN_ON } from "../constant/spinner";
export let loginAction = (values, onNavigate) => {
  return (dispatch) => {
    dispatch({
      type: TURN_ON,
    });

    https
      .post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((res) => {
        let dataJSON = JSON.stringify(res.data.content);
        localStorage.setItem("SET_INFO", dataJSON);
        message.success("login redux thành công");
        dispatch({
          type: TURN_OFF,
        });
        dispatch({
          type: SET_INFO,
          payload: res.data.content,
        });
        // điều hướng trang
        onNavigate("/");
      })
      .catch((err) => {
        dispatch({
          type: TURN_OFF,
        });
        message.error("login thất bại");
      });
  };
};
