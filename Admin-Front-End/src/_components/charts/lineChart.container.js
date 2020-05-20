// tập dữ liệu có thể được nhập theo yêu cầu, không nhập các gói khác ngoại trừ
import React, { Component } from "react";

import { Chart, Axis, Tooltip, Geom, Legend } from "bizcharts";

// const dataTemplate = [
//    { type: "Năm 2018", month: "Tháng 1", value: 3 },
//    { type: "Năm 2018", month: "2", value: 4 },
//    { type: "Năm 2018", month: "3", value: 3.5 },
//    { type: "Năm 2018", month: "4", value: 5 },
//    { type: "Năm 2018", month: "5", value: 4.9 },
//    { type: "Năm 2018", month: "6", value: 6 },
//    { type: "Năm 2018", month: "7", value: 7 },
//    { type: "Năm 2018", month: "8", value: 9 },
//    { type: "Năm 2018", month: "9", value: 13 },
//    { type: "Năm 2018", month: "10", value: 6 },
//    { type: "Năm 2018", month: "11", value: 8 },
//    { type: "Năm 2018", month: "Tháng 12", value: 8 },
//    { type: "Năm 2019", month: "Tháng 1", value: 3.5 },
//    { type: "Năm 2019", month: "2", value: 8 },
//    { type: "Năm 2019", month: "3", value: 4.5 },
//    { type: "Năm 2019", month: "4", value: 5 },
//    { type: "Năm 2019", month: "5", value: 9.9 },
//    { type: "Năm 2019", month: "6", value: 12 },
//    { type: "Năm 2019", month: "7", value: 25 },
//    { type: "Năm 2019", month: "8", value: 19 },
//    { type: "Năm 2019", month: "9", value: 33 },
//    { type: "Năm 2019", month: "10", value: 9 },
//    { type: "Năm 2019", month: "11", value: 6 },
//    { type: "Năm 2019", month: "Tháng 12", value: 4 },
//    { type: "Năm 2020", month: "Tháng 1", value: 32 },
//    { type: "Năm 2020", month: "2", value: 41 },
//    { type: "Năm 2020", month: "3", value: 13.5 },
//    { type: "Năm 2020", month: "4", value: 15 },
//    { type: "Năm 2020", month: "5", value: 14.9 },
//    { type: "Năm 2020", month: "6", value: 16 },
//    { type: "Năm 2020", month: "7", value: 17 },
//    { type: "Năm 2020", month: "8", value: 19 },
//    { type: "Năm 2020", month: "9", value: 13 },
//    { type: "Năm 2020", month: "10", value: 16 },
//    { type: "Năm 2020", month: "11", value: 18 },
//    { type: "Năm 2020", month: "Tháng 12", value: 18 }
//    //Nếu quá 5 năm thì sẽ gộp lại thành 2 năm, hoặc 5 năm:
//    // ví dụ thống kê từ khi web mở 2001 đến 2020 thì:
//    // Năm 2001-2005, 2006-2010, 2011-2015, 2016-2020, 2018, 2019, 2020
//    //Vậy là tổng cộng có 7 đường
// ];

const cols = {
   value: { min: 0 },
   month: { range: [0, 1] }
};

export default class LineChart extends Component {
   render() {
      const { data, yearDefault } = this.props;

      return (
         <Chart
            filter={[
               [
                  "type",
                  t => {
                     if (t === yearDefault) return true;
                     return false;
                  }
               ]
            ]}
            data={data}
            scale={cols}
            forceFit
            height={350}
            padding="auto"
         >
            <Axis name="month" />
            <Axis name="value" />
            <Legend />
            <Tooltip crosshairs={{ type: "y" }} />
            <Geom type="line" position="month*value" size={2} color="type" />
            <Geom
               type="point"
               position="month*value"
               size={4}
               shape={"circle"}
               style={{ stroke: "#fff", lineWidth: 1 }}
               color="type"
            />
         </Chart>
      );
   }
}
