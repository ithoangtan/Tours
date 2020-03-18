import React from "react";
import { Chart, Axis, Tooltip, Geom, Legend } from "bizcharts";
import DataSet from "@antv/data-set";

const data = [
   {
      label: "Tháng 1",
      VietNam: 1000,
      Asia: 800,
      Europe: 1260,
      America: 200, //Châu Mỹ
      Average: 122
      //Chi tiết các tỉnh xem tại trang web:
      // https://en.wikipedia.org/wiki/List_of_regions_of_Vietnam
   },
   {
      label: " 2",
      VietNam: 800,
      Asia: 1200,
      Europe: 1300,
      America: 300,
      Average: 177
   },
   {
      label: " 3",
      VietNam: 950,
      Asia: 950,
      Europe: 900,
      America: 500,
      Average: 500
   },
   {
      label: " 4",
      VietNam: 500,
      Asia: 500,
      Europe: 390,
      America: 100,
      Average: 322
   },
   {
      label: " 5",
      VietNam: 170,
      Asia: 170,
      Europe: 100,
      America: 300,
      Average: 666
   },
   {
      label: "Tháng 6",
      VietNam: 170,
      Asia: 170,
      Europe: 100,
      America: 300,
      Average: 877
   },
   {
      label: "Tháng 7",
      VietNam: 170,
      Asia: 170,
      Europe: 10,
      America: 300,
      Average: 500
   },
   {
      label: " 8",
      VietNam: 170,
      Asia: 170,
      Europe: 100,
      America: 300,
      Average: 411
   },
   {
      label: " 9",
      VietNam: 170,
      Asia: 170,
      Europe: 100,
      America: 300,
      Average: 311
   },
   {
      label: " 10",
      VietNam: 170,
      Asia: 170,
      Europe: 100,
      America: 300,
      Average: 211
   },
   {
      label: " 11",
      VietNam: 170,
      Asia: 170,
      Europe: 100,
      America: 300,
      Average: 611
   },
   {
      label: "Tháng 12",
      VietNam: 170,
      Asia: 170,
      Europe: 100,
      America: 300,
      Average: 877
   }
];
const ds = new DataSet();
const dv = ds.createView().source(data);
dv.transform({
   type: "fold",
   fields: ["VietNam", "Asia", "Europe", "America"], //Độ rộng tường
   key: "type", // key lĩnh vực
   value: "value" // value lĩnh vực
});

const scale = {
   Average: {
      type: "linear",
      min: 0, //right info at line
      max: 1400 //right info at line
      //2 thông số này cần phải tính toán cho tương ứng với đơn vị cột bên phải
      // Tính như nào thì phải có số liệu thực mới tính được
   }
};

let chartIns = null;

const getG2Instance = chart => {
   chartIns = chart;
};

export default class ColumnChartAll extends React.Component {
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
                  {
                     value: "VietNam",
                     marker: { symbol: "square", fill: "#3182bd", radius: 5 }
                  },
                  {
                     value: "Asia",
                     marker: { symbol: "square", fill: "#41a2fc", radius: 5 }
                  },
                  {
                     value: "Europe",
                     marker: { symbol: "square", fill: "#54ca76", radius: 5 }
                  },
                  {
                     value: "America",
                     marker: { symbol: "square", fill: "#ff85c0", radius: 5 }
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
                     if (value === "VietNam") {
                        return "#2b6cbb";
                     }
                     if (value === "Asia") {
                        return "#41a2fc";
                     }
                     if (value === "Europe") {
                        return "#54ca76";
                     }
                     if (value === "America") {
                        return "#ff85c0";
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
               shape={"circle"}
            />
         </Chart>
      );
   }
}
