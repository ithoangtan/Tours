import React from "react";
import { Chart, Axis, Tooltip, Geom, Legend } from "bizcharts";
import DataSet from "@antv/data-set";

const data = [
   {
      label: "Tháng 1",
      "Northern Vietnam": 100, //Bắc Bộ
      "North Central": 180, //Bắc Trung Bộ
      "South Central Coast": 150, //Duyên Hải Nam Trung Bộ
      "Central Highlands": 320, //Tây Nguyên
      Southeast: 200, //Đông Nam Bộ, Miền Đông
      "Mekong River Delta": 300, //Đồng Bằng sông Cửu Long
      Average: 251
      //Chi tiết các tỉnh xem tại trang web:
      // https://en.wikipedia.org/wiki/List_of_regions_of_Vietnam
   },
   {
      label: "2",
      "Northern Vietnam": 100,
      "North Central": 180,
      "South Central Coast": 150,
      "Central Highlands": 320,
      Southeast: 200,
      "Mekong River Delta": 300,
      Average: 211
   },
   {
      label: "3",
      "Northern Vietnam": 100,
      "North Central": 180,
      "South Central Coast": 150,
      "Central Highlands": 320,
      Southeast: 200,
      "Mekong River Delta": 300,
      Average: 271
   },
   {
      label: "4",
      "Northern Vietnam": 100,
      "North Central": 180,
      "South Central Coast": 150,
      "Central Highlands": 320,
      Southeast: 200,
      "Mekong River Delta": 300,
      Average: 251
   },
   {
      label: "5",
      "Northern Vietnam": 100,
      "North Central": 180,
      "South Central Coast": 150,
      "Central Highlands": 320,
      Southeast: 200,
      "Mekong River Delta": 300,
      Average: 211
   },
   {
      label: "Tháng 6",
      "Northern Vietnam": 100,
      "North Central": 180,
      "South Central Coast": 150,
      "Central Highlands": 320,
      Southeast: 200,
      "Mekong River Delta": 300,
      Average: 251
   },
   {
      label: "Tháng 7",
      "Northern Vietnam": 100,
      "North Central": 180,
      "South Central Coast": 150,
      "Central Highlands": 320,
      Southeast: 200,
      "Mekong River Delta": 300,
      Average: 221
   },
   {
      label: "8",
      "Northern Vietnam": 100,
      "North Central": 180,
      "South Central Coast": 150,
      "Central Highlands": 320,
      Southeast: 200,
      "Mekong River Delta": 300,
      Average: 251
   },
   {
      label: "9",
      "Northern Vietnam": 100,
      "North Central": 180,
      "South Central Coast": 150,
      "Central Highlands": 320,
      Southeast: 200,
      "Mekong River Delta": 300,
      Average: 231
   },
   {
      label: "10",
      "Northern Vietnam": 100,
      "North Central": 180,
      "South Central Coast": 150,
      "Central Highlands": 320,
      Southeast: 200,
      "Mekong River Delta": 300,
      Average: 251
   },
   {
      label: "11",
      "Northern Vietnam": 100,
      "North Central": 180,
      "South Central Coast": 150,
      "Central Highlands": 320,
      Southeast: 200,
      "Mekong River Delta": 300,
      Average: 251
   },
   {
      label: "Tháng 12",
      "Northern Vietnam": 100,
      "North Central": 180,
      "South Central Coast": 150,
      "Central Highlands": 320,
      Southeast: 200,
      "Mekong River Delta": 300,
      Average: 330
   },
   {
      label: "Trung bình",
      "Northern Vietnam": 100,
      "North Central": 180,
      "South Central Coast": 150,
      "Central Highlands": 320,
      Southeast: 200,
      "Mekong River Delta": 300,
      Average: 152
   }
];
const ds = new DataSet();
const dv = ds.createView().source(data);
dv.transform({
   type: "fold",
   fields: [
      "Northern Vietnam", //Bắc Bộ
      "North Central", //Bắc Trung Bộ
      "South Central Coast", //Duyên Hải Nam Trung Bộ
      "Central Highlands", //Tây Nguyên
      "Southeast", //Đông Nam Bộ, Miền Đông
      "Mekong River Delta" //Đồng Bằng sông Cửu Long
   ], //Độ rộng tường
   key: "type", // key lĩnh vực
   value: "value" // value lĩnh vực
});
const scale = {
   Average: { type: "linear", min: 0, max: 350 }
};

let chartIns = null;

const getG2Instance = chart => {
   chartIns = chart;
};

export default class ColumnChartVietNam extends React.Component {
   render() {
      return (
         <Chart
            height={400}
            width={500}
            forceFit
            data={dv}
            scale={scale}
            padding="auto"
            onGetG2Instance={getG2Instance}
         >
            <Legend
               custom
               allowAllCanceled
               items={[
                  //   ""Northern Vietnam"", //Bắc Bộ
                  {
                     value: "Northern Vietnam",
                     marker: { symbol: "square", fill: "#2b6cbb", radius: 5 }
                  },
                  //   ""North Central"", //Bắc Trung Bộ
                  {
                     value: "North Central",
                     marker: { symbol: "square", fill: "#41a2fc", radius: 5 }
                  },
                  //   "SouthCentralCoast", //Duyên Hải Nam Trung Bộ
                  {
                     value: "South Central Coast",
                     marker: { symbol: "square", fill: "#54ca76", radius: 5 }
                  },
                  //   "CentralHighlands", //Tây Nguyên
                  {
                     value: "Central Highlands",
                     marker: { symbol: "square", fill: "#b37feb", radius: 5 }
                  },
                  //   "Southeast", //Đông Nam Bộ, Miền Đông
                  {
                     value: "Southeast",
                     marker: { symbol: "square", fill: "#ffd666", radius: 5 }
                  },
                  //   "MekongRiverDelta" //Đồng Bằng sông Cửu Long
                  {
                     value: "Mekong River Delta",
                     marker: { symbol: "square", fill: "#5b8c00", radius: 5 }
                  },
                  {
                     value: "Average",
                     marker: {
                        symbol: "hyphen",
                        stroke: "#389e0d",
                        radius: 5,
                        lineWidth: 3
                     }
                  }
               ]}
               onClick={ev => {
                  const item = ev.item;
                  const value = item.value;
                  const checked = ev.checked;
                  const geoms = chartIns.getAllGeoms();
                  for (let i = 0; i < geoms.length; i++) {
                     const geom = geoms[i];
                     if (
                        geom.getYScale().field === value &&
                        value === "Average"
                     ) {
                        if (checked) {
                           geom.show();
                        } else {
                           geom.hide();
                        }
                     } else if (
                        geom.getYScale().field === "value" &&
                        value !== "Average"
                     ) {
                        geom.getShapes().map(shape => {
                           if (shape._cfg.origin._origin.type === value) {
                              shape._cfg.visible = !shape._cfg.visible;
                           }
                           shape.get("canvas").draw();
                           return shape;
                        });
                     }
                  }
               }}
            />
            <Axis name="label" />
            <Axis name="value" position={"left"} />
            <Tooltip />
            <Geom
               type="interval"
               position="label*value"
               color={[
                  "type",
                  value => {
                     //  ""Northern Vietnam"", //Bắc Bộ
                     //  ""North Central"", //Bắc Trung Bộ
                     //  ""South Central Coast"", //Duyên Hải Nam Trung Bộ
                     //  ""Central Highlands"", //Tây Nguyên
                     //  ""Southeast"", //Đông Nam Bộ, Miền Đông
                     //  ""Mekong River Delta""; //Đồng Bằng sông Cửu Long
                     if (value === "Northern Vietnam") {
                        return "#2b6cbb";
                     }
                     if (value === "North Central") {
                        return "#41a2fc";
                     }
                     if (value === "South Central Coast") {
                        return "#54ca76";
                     }
                     if (value === "Central Highlands") {
                        return "#b37feb";
                     }
                     if (value === "Southeast") {
                        return "#ffd666";
                     }
                     if (value === "Mekong River Delta") {
                        return "#5b8c00";
                     }
                  }
               ]}
               adjust={[
                  {
                     type: "dodge",
                     marginRatio: 1 / 32
                  }
               ]}
            />
            <Geom
               type="line"
               position="label*Average"
               color="#389e0d"
               size={3}
            />
         </Chart>
      );
   }
}
