import React from "react";
import { https } from "../../../Service/config";
import { useEffect } from "react";
import { useState } from "react";
import { Carousel, ConfigProvider } from "antd";

export default function Banner() {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    https
      .get("/api/QuanLyPhim/LayDanhSachBanner")
      .then((res) => {
        console.log(res);
        setBanner(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Carousel: {
              dotHeight: 10,
              dotWidth: 30,
              dotActiveWidth: 24,
            },
          },
        }}
      >
        <Carousel className="mb-10 " autoplay effect="fade">
          {banner.map((item, index) => {
            return <img key={index} src={item.hinhAnh} />;
          })}
        </Carousel>
      </ConfigProvider>
    </div>
  );
}
