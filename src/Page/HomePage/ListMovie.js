import { Card } from "antd";
import { useEffect, useState } from "react";
import Meta from "antd/es/card/Meta";
import { https } from "../../Service/config";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TURN_OFF, TURN_ON } from "../../redux/constant/spinner";

export default function ListMovie() {
  const [movieArr, setMovieArr] = useState([]);
  let dispatch = useDispatch();

  useEffect(() => {
    // axios({
    //  url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09",
    //   method: "GET",
    //   headers: {
    //     TokenCybersoft:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NCIsIkhldEhhblN0cmluZyI6IjE0LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNTY0NDgwMDAwMCIsIm5iZiI6MTY4NzcxMjQwMCwiZXhwIjoxNzE1NzkyNDAwfQ.cy8EAM6hrKh2o6c9THZW5lrKeOEmQXIDgFVyIf7K_rU",
    //   },
    // })
    dispatch({
      type: TURN_ON,
    });
    https
      .get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09")
      .then((res) => {
        dispatch({
          type: TURN_OFF,
        });
        console.log(res.data.content);
        setMovieArr(res.data.content);
      })
      .catch((err) => {
        dispatch({
          type: TURN_OFF,
        });
      });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-5 container ">
      {movieArr.map((item, index) => {
        return (
          <Card
            key={index}
            hoverable
            style={{ width: "100%" }}
            cover={<img alt="example" src={item.hinhAnh} />}
          >
            <Meta title={item.tenPhim} description="" />
            <NavLink
              to={`/detail/${item.maPhim}`}
              className=" px-5 py-5 rounded border-2 border-red-600 block text-center"
            >
              Xem chi tiết
            </NavLink>
          </Card>
        );
      })}
    </div>
  );
}
