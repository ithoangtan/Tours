import React, { Component } from "react";

import LineChart from "../../../_components/charts/lineChart.container";
import ColumnChartAll from "../../../_components/charts/columChartAll.container";
import ColumnChartVietNam from "../../../_components/charts/columChartVietNam.container";
import { Radio } from "antd";
import CircleChart from "../../../_components/charts/circleChart.container";

export default class ReportViewChartContainer extends Component {
   state = {
      where: "all"
   };

   onChangeWhereReport = e => {
      console.log("radio checked", e.target.value);
      this.setState({
         where: e.target.value
      });
   };
   render() {
      const { where } = this.state;
      return (
         <>
            <div className="row">
               {/* Area Chart */}
               <div className="col-xl-8 col-lg-7">
                  <div className="card shadow mb-4">
                     {/* Card Header - Dropdown */}
                     <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">
                           Doanh thu các năm theo tháng
                        </h6>

                        <div className="dropdown no-arrow">
                           <a
                              className="dropdown-toggle"
                              href="/"
                              role="button"
                              id="dropdownMenuLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                           >
                              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                           </a>
                           <div
                              className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                              aria-labelledby="dropdownMenuLink"
                           >
                              <div className="dropdown-header">
                                 Dropdown Header:
                              </div>
                              <a className="dropdown-item" href="/">
                                 Action
                              </a>
                              <a className="dropdown-item" href="/">
                                 Another action
                              </a>
                              <div className="dropdown-divider" />
                              <a className="dropdown-item" href="/">
                                 Something else here
                              </a>
                           </div>
                        </div>
                     </div>
                     {/* Card Body */}
                     <div className="card-body">
                        {/* <div className="chart-area"> */}
                        <LineChart />
                        {/* </div> */}
                     </div>
                  </div>
               </div>
               {/* Pie Chart */}
               <div className="col-xl-4 col-lg-5">
                  <div className="card shadow mb-4">
                     {/* Card Header - Dropdown */}
                     <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">
                           Số lượng người du lịch
                        </h6>
                        <div className="dropdown no-arrow">
                           <a
                              className="dropdown-toggle"
                              href="/"
                              role="button"
                              id="dropdownMenuLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                           >
                              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                           </a>
                           <div
                              className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                              aria-labelledby="dropdownMenuLink"
                           >
                              <div className="dropdown-header">
                                 Dropdown Header:
                              </div>
                              <a className="dropdown-item" href="/">
                                 Action
                              </a>
                              <a className="dropdown-item" href="/">
                                 Another action
                              </a>
                              <div className="dropdown-divider" />
                              <a className="dropdown-item" href="/">
                                 Something else here
                              </a>
                           </div>
                        </div>
                     </div>
                     {/* Card Body */}
                     <div className="card-body">
                        <CircleChart />
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-xl-12 col-lg-12">
                  <div className="card shadow mb-4">
                     {/* Card Header - Dropdown */}
                     <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">
                           Thống kê lượng khách theo thời gian của từng khu vực
                        </h6>
                        <div className="ht-vn-or-all">
                           <Radio.Group
                              defaultValue="all"
                              buttonStyle="solid"
                              onChange={this.onChangeWhereReport}
                           >
                              <Radio.Button value="all">Tất cả</Radio.Button>
                              <Radio.Button value="vn">Việt Nam</Radio.Button>
                           </Radio.Group>
                        </div>
                        <div className="dropdown no-arrow">
                           <a
                              className="dropdown-toggle"
                              href="/"
                              role="button"
                              id="dropdownMenuLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                           >
                              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                           </a>
                           <div
                              className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                              aria-labelledby="dropdownMenuLink"
                           >
                              <div className="dropdown-header">
                                 Dropdown Header:
                              </div>
                              <a className="dropdown-item" href="/">
                                 Action
                              </a>
                              <a className="dropdown-item" href="/">
                                 Another action
                              </a>
                              <div className="dropdown-divider" />
                              <a className="dropdown-item" href="/">
                                 Something else here
                              </a>
                           </div>
                        </div>
                     </div>
                     {/* Card Body */}
                     <div className="card-body">
                        {/* <div className="chart-area"> */}
                        {where === "all" ? (
                           <ColumnChartAll />
                        ) : (
                           <ColumnChartVietNam />
                        )}

                        {/* </div> */}
                     </div>
                  </div>
               </div>
            </div>
         </>
      );
   }
}
