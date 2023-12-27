import React, { useEffect, useState } from "react";
import { https } from "../../../Service/config";
import { Tabs, Tooltip } from "antd";
import ItemMovie from "./ItemMovie";

function TabMovie() {
  const [heThongRap, setHeThongRap] = useState([]);
  useEffect(() => {
    https
      .get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01")
      .then((res) => {
        console.log(res);
        setHeThongRap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onChange = (key) => {
    console.log(key);
  };
  const items = heThongRap.map((heThong, index) => {
    return {
      key: index,
      label: <img className="w-16" src={heThong.logo} alt="" />,
      children: (
        <Tabs
          style={{ height: 600 }}
          className="space-y-5 overflow-y-scroll"
          tabPosition="left"
          items={heThong.lstCumRap.map((cumRap) => {
            return {
              key: cumRap.diaChi,
              label: (
                <div className="w-60 truncate text-left">
                  <Tooltip title={cumRap.diaChi}>
                    <p>{cumRap.tenCumRap}</p>
                  </Tooltip>
                </div>
              ),
              children: (
                <div>
                  {cumRap.danhSachPhim.map((phim) => {
                    return <ItemMovie key={phim.maPhim} data={phim} />;
                  })}
                </div>
              ),
            };
          })}
        />
      ),
    };
  });

  return (
    <div className="container pb-96">
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </div>
  );
}

export default TabMovie;
//   key: index,
//       label: "Tab 1",
//       children: "Content of Tab Pane 1",
//     },
//   ;
//{
//     key: "1",
//     label: "Tab 1",
//     children: "Content of Tab Pane 1",
//   },
// ];
