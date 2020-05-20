import React, { Component } from "react";

import LineChart from "../../../_components/charts/lineChart.container";
import ColumnChartAll from "../../../_components/charts/columChartAll.container";
import ColumnChartVietNam from "../../../_components/charts/columChartVietNam.container";
import { Radio, Spin, Select } from "antd";

import CircleChart from "../../../_components/charts/circleChart.container";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as reportActions from "../../../_actions/report.actions";

import moment from "moment";

const { Option } = Select;

class ReportViewChartContainer extends Component {
   state = {
      where: "all",
      year: parseInt(moment(Date.now()).format("YYYY"), 10)
   };

   onChangeWhereReport = e => {
      // console.log("radio checked", e.target.value);
      this.setState({
         where: e.target.value
      });
   };

   componentWillMount() {
      const { reportAllActions } = this.props;
      const {
         fetchReportNumberOfTouristsRequest,
         fetchReportNumberPeopleFollowDestinationRequest,
         fetchReportRevenueFollowMonthAllRequest
      } = reportAllActions;
      fetchReportNumberOfTouristsRequest();
      fetchReportNumberPeopleFollowDestinationRequest();
      fetchReportRevenueFollowMonthAllRequest();
   }

   handleChangeYear = value => {
      this.setState({ year: value.key });
   };

   renderOptionYear() {
      const { reportNumberPeopleFollowDestination } = this.props;

      let result = reportNumberPeopleFollowDestination.map((item, index) => {
         return (
            <Option value={item[0]} key={index}>
               {item[0]}
            </Option>
         );
      });

      return result;
   }

   render() {
      const { where } = this.state;
      const {
         reportRevenueFollowMonthAll,
         reportNumberOfTourists,
         reportNumberPeopleFollowDestination
      } = this.props;

      const xhtml = (
         <div
            className="container col-md-12 ht-d-flex-col-center-center"
            style={{ width: "100%", height: "20vh" }}
         >
            <Spin size="large" tip="Caculating..." />
         </div>
      );

      if (reportRevenueFollowMonthAll.length === 0) return xhtml;
      if (reportNumberPeopleFollowDestination.length === 0) return xhtml;
      if (reportNumberOfTourists.personal === undefined) return xhtml;

      // Map data for LineChart
      let dataReportRevenueFollowMonthAll = [];
      for (let i = 0; i < reportRevenueFollowMonthAll.length; i++) {
         for (
            let j = 0;
            j < reportRevenueFollowMonthAll[i][1].totalMonth.length;
            j++
         ) {
            dataReportRevenueFollowMonthAll.push({
               type: `${reportRevenueFollowMonthAll[i][0]}`,
               month: `${j + 1}`,
               value: reportRevenueFollowMonthAll[i][1].totalMonth[j]
            });
         }
      }

      //Viet Nam
      let dataReportNumberPeopleFollowDestinationVietNam = [];
      let maxVietNam = 0;
      for (let i = 0; i < reportNumberPeopleFollowDestination.length; i++) {
         let data = [];
         for (let k = 1; k <= 12; k++) {
            let dataMonth = {};
            let temp = 0;
            dataMonth = { ...dataMonth, label: `${k}` };
            for (
               let j = 1;
               j < reportNumberPeopleFollowDestination[i][1].length;
               j++
            ) {
               // 0: VietNam, 7: VietNamSum
               temp =
                  reportNumberPeopleFollowDestination[i][1][j][k]
                     .numbersPeople +
                  reportNumberPeopleFollowDestination[i][1][j][k].numbersYoung +
                  reportNumberPeopleFollowDestination[i][1][j][k]
                     .numbersChildren +
                  reportNumberPeopleFollowDestination[i][1][j][k].numbersBaby;
               if (
                  reportNumberPeopleFollowDestination[i][1][j][0] ===
                  "NorthernVietnam"
               )
                  dataMonth = {
                     ...dataMonth,
                     "Northern Vietnam": temp
                  };
               if (
                  reportNumberPeopleFollowDestination[i][1][j][0] ===
                  "NorthCentral"
               )
                  dataMonth = {
                     ...dataMonth,
                     "North Central": temp
                  };
               if (
                  reportNumberPeopleFollowDestination[i][1][j][0] ===
                  "SouthCentralCoast"
               )
                  dataMonth = {
                     ...dataMonth,
                     "South Central Coast": temp
                  };
               if (
                  reportNumberPeopleFollowDestination[i][1][j][0] ===
                  "CentralHighlands"
               )
                  dataMonth = {
                     ...dataMonth,
                     "Central Highlands": temp
                  };
               if (
                  reportNumberPeopleFollowDestination[i][1][j][0] ===
                  "Southeast"
               )
                  dataMonth = {
                     ...dataMonth,
                     Southeast: temp
                  };
               if (
                  reportNumberPeopleFollowDestination[i][1][j][0] ===
                  "MekongRiverDelta"
               )
                  dataMonth = {
                     ...dataMonth,
                     "Mekong River Delta": temp
                  };
               if (
                  reportNumberPeopleFollowDestination[i][1][j][0] ===
                  "VietNamSum"
               )
                  dataMonth = {
                     ...dataMonth,
                     Average: Math.ceil(temp / 6)
                  };

               if (temp > maxVietNam) maxVietNam = temp;
            }
            data.push({ ...dataMonth });
         }

         dataReportNumberPeopleFollowDestinationVietNam.push({
            year: reportNumberPeopleFollowDestination[i][0],
            data
         });
      }

      // reportNumberPeopleFollowDestination[0] : [2019]
      // reportNumberPeopleFollowDestination[0][0] : 2019;
      // reportNumberPeopleFollowDestination[0][1] : [VietNam];
      // reportNumberPeopleFollowDestination[0][1][0] : "VietNam";
      // reportNumberPeopleFollowDestination[0][1][1] : [NorthernVietNam];
      // reportNumberPeopleFollowDestination[0][1][7] : [VietNamSum];
      // reportNumberPeopleFollowDestination[0][2] : [Asian];
      // reportNumberPeopleFollowDestination[0][2][0] : "Asian";
      // reportNumberPeopleFollowDestination[0][2][1] : {numbersPeople, numbersYoung, numbersChildren, numbersBaby};
      // reportNumberPeopleFollowDestination[0][2][12] : {numbersPeople, numbersYoung, numbersChildren, numbersBaby};
      // reportNumberPeopleFollowDestination[0][3] : [Europe];
      // reportNumberPeopleFollowDestination[0][4] : [America];
      // reportNumberPeopleFollowDestination[0][5] : [AllSum];
      // reportNumberPeopleFollowDestination[1][0] : 2020;
      // reportNumberPeopleFollowDestination[1] : [2020];
      // All
      let dataReportNumberPeopleFollowDestinationAll = [];
      let maxAll = 0;
      for (let i = 0; i < reportNumberPeopleFollowDestination.length; i++) {
         let data = [];
         for (let k = 1; k <= 12; k++) {
            let dataMonth = {};
            let temp = 0;
            dataMonth = { ...dataMonth, label: `${k}` };
            for (
               let j = 1;
               j < reportNumberPeopleFollowDestination[i].length;
               j++
            ) {
               if (j === 1) {
                  temp =
                     reportNumberPeopleFollowDestination[i][j][7][k]
                        .numbersPeople +
                     reportNumberPeopleFollowDestination[i][j][7][k]
                        .numbersYoung +
                     reportNumberPeopleFollowDestination[i][j][7][k]
                        .numbersChildren +
                     reportNumberPeopleFollowDestination[i][j][7][k]
                        .numbersBaby;
                  if (temp > maxAll) maxAll = temp;
                  dataMonth = {
                     ...dataMonth,
                     VietNam: temp
                  };
               } else if (
                  j ===
                  reportNumberPeopleFollowDestination[i].length - 1
               ) {
                  temp =
                     (reportNumberPeopleFollowDestination[i][j][k]
                        .numbersPeople +
                        reportNumberPeopleFollowDestination[i][j][k]
                           .numbersYoung +
                        reportNumberPeopleFollowDestination[i][j][k]
                           .numbersChildren +
                        reportNumberPeopleFollowDestination[i][j][k]
                           .numbersBaby) /
                     4;
                  if (temp > maxAll) maxAll = temp;
                  dataMonth = {
                     ...dataMonth,
                     Average: temp
                  };
               } else {
                  temp =
                     reportNumberPeopleFollowDestination[i][j][k]
                        .numbersPeople +
                     reportNumberPeopleFollowDestination[i][j][k].numbersYoung +
                     reportNumberPeopleFollowDestination[i][j][k]
                        .numbersChildren +
                     reportNumberPeopleFollowDestination[i][j][k].numbersBaby;
                  if (temp > maxAll) maxAll = temp;
                  dataMonth = {
                     ...dataMonth,
                     [reportNumberPeopleFollowDestination[i][j][0]]: temp
                  };
               }
            }
            data.push({ ...dataMonth });
         }

         dataReportNumberPeopleFollowDestinationAll.push({
            year: reportNumberPeopleFollowDestination[i][0],
            data
         });
      }

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
                        <LineChart
                           data={dataReportRevenueFollowMonthAll}
                           yearDefault={`${this.state.year}`}
                        />
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
                        <CircleChart dataCount={reportNumberOfTourists} />
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

                           <Select
                              labelInValue={true}
                              style={{ marginLeft: 8, width: "80px" }}
                              placeholder={`${this.state.year}`}
                              onChange={this.handleChangeYear}
                           >
                              {this.renderOptionYear()}
                           </Select>
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
                           <ColumnChartAll
                              data={dataReportNumberPeopleFollowDestinationAll}
                              year={this.state.year}
                              max={maxAll}
                           />
                        ) : (
                              <ColumnChartVietNam
                                 data={
                                    dataReportNumberPeopleFollowDestinationVietNam
                                 }
                                 year={this.state.year}
                                 max={maxVietNam}
                              />
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
ReportViewChartContainer.propTypes = {
   classes: PropTypes.object,
   reportAllActions: PropTypes.shape({
      fetchReportNumberOfTouristsRequest: PropTypes.func,
      fetchReportNumberPeopleFollowDestinationRequest: PropTypes.func,
      fetchReportRevenueFollowMonthAllRequest: PropTypes.func
   }),
   reportNumberOfTourists: PropTypes.object,
   reportNumberPeopleFollowDestination: PropTypes.array,
   reportRevenueFollowMonthAll: PropTypes.array
};

const mapStateToProps = state => {
   return {
      reportRevenueFollowMonthAll: state.report.reportRevenueFollowMonthAll,
      reportNumberOfTourists: state.report.reportNumberOfTourists,
      reportNumberPeopleFollowDestination:
         state.report.reportNumberPeopleFollowDestination
   };
};
const mapDispatchToProps = dispatch => {
   return {
      reportAllActions: bindActionCreators(reportActions, dispatch)
      //Bên trái chỉ là đặt tên thôi, bên phải là reportActions ở bên report.action.js
   };
};
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ReportViewChartContainer);
