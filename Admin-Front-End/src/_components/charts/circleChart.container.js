import React, { Component } from "react";
import { Chart, Geom, Axis, Tooltip, Coord, Legend } from "bizcharts";

export default class CircleChart extends Component {
   render() {
      const { dataCount } = this.props;

      let sumDataCount =
         dataCount.personal +
         dataCount.couple +
         dataCount.family +
         dataCount.friend +
         dataCount.business;

      let personalPercent =
         Math.round((dataCount.personal / sumDataCount) * 100) / 100;
      let couplePercent =
         Math.round((dataCount.couple / sumDataCount) * 100) / 100;
      let familyPercent =
         Math.round((dataCount.family / sumDataCount) * 100) / 100;
      let friendPercent =
         Math.round((dataCount.friend / sumDataCount) * 100) / 100;
      let businessPercent =
         Math.round((dataCount.business / sumDataCount) * 100) / 100;

      const data = [
         {
            item: "Cá Nhân",
            count: dataCount.personal,
            percent: personalPercent
         },
         { item: "Cặp Đôi", count: dataCount.couple, percent: couplePercent },
         { item: "Gia Đình", count: dataCount.family, percent: familyPercent },
         { item: "Bạn Bè", count: dataCount.friend, percent: friendPercent },
         {
            item: "Doanh Nghiệp",
            count: dataCount.business,
            percent: businessPercent
         }
      ];

      const cols = {
         percent: {
            formatter: val => (val = `${val * 100}%`)
         }
      };

      return (
         <div>
            <Chart
               height={350}
               data={data}
               scale={cols}
               padding="auto"
               forceFit
               onGetG2Instance={chart => {
                  // Nếu biểu đồ hình tròn được vẽ nhiều lần, quá trình setSelected sẽ không có hiệu lực.
                  setTimeout(() => {
                     // thiết lập được chọn theo mặc định
                     const geom = chart.get("geoms")[0];
                     // Nhận tất cả
                     const items = geom.get("data");
                     // Lấy dữ liệu tương ứng
                     geom.setSelected(items[0]);
                  }, 2000);
               }}
               // đặt đã chọn
               onPlotClick={ev => {}}
            >
               <Coord type="theta" radius={0.65} />
               <Axis name="percent" />
               <Legend
               //   position="right"
               //   offsetY={400 / 2 + 120}
               //   offsetX={-100}
               />
               <Tooltip
                  showTitle={false}
                  itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
               />
               <Geom
                  type="intervalStack"
                  position="percent"
                  color="item"
                  tooltip={[
                     "item*count*percent",
                     (item, count, percent) => {
                        console.log(count, percent);
                        count = `${count} lượt`;
                        percent = `   ${percent * 100}%`;
                        return {
                           name: item,
                           value: [count, percent]
                        };
                     }
                  ]}
                  style={{
                     lineWidth: 1,
                     stroke: "#fff"
                  }}
               />
            </Chart>
         </div>
      );
   }
}
