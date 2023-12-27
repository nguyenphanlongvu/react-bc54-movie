import moment from "moment/moment";
import React from "react";
import { NavLink } from "react-router-dom";

export default function ItemMovie({ data }) {
  console.log("😃 - ItemMovie - data:", data);
  return (
    <div
      className=" flex 
    space-x-5"
    >
      <img className="w-32 h-48 object-cover" src={data.hinhAnh} alt="" />
      <div>
        <h2 className="text-2xl"> {data.tenPhim}</h2>
        <div className="grid grid-cols-4 gap-5">
          {data.lstLichChieuTheoPhim.slice(0, 16).map((lichChieu, index) => {
            return (
              <div key={lichChieu.maLichChieu}>
                <NavLink
                  to={`/booking/${lichChieu.maLichChieu}`}
                  className="border border-gray-200 bg-gray-100 rouded p-1"
                >
                  <span
                    className=" font-medium text-green-600"
                    key={lichChieu.maLichChieu}
                  >
                    {moment(lichChieu.maLichChieu).format("DD-MMM-YYYY")}
                  </span>
                  <span>~</span>
                  <span
                    className=" text-red-600 font-medium"
                    key={lichChieu.maLichChieu}
                  >
                    {moment(lichChieu.maLichChieu).format("hh:mm")}
                  </span>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
