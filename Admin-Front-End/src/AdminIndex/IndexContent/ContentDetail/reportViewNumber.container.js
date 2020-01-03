import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as reportActions from "../../../_actions/report.actions";

import * as INDEX_CONSTANTS from "../../../_constants/index.constants";
import funcLoadJs from "../../../_constants/loadJs.constants";

class ReportViewNumberContainer extends Component {
   componentDidMount() {
      funcLoadJs(INDEX_CONSTANTS.AdminArrayExternalScript);
   }
   componentWillMount() {
      const { reportAllActions } = this.props;
      const { fetchReportRequest } = reportAllActions;
      fetchReportRequest();
   }
   analyticReport() {
      const { report } = this.props;
      let report2 = [];
      if (report !== undefined || report !== [] || report !== null) {
         for (let index = 0; index < report.length - 1; index++) {
            report[index].forEach(element => {
               report2.push(element);
            });
         }
      }
      return report2;
   }
   render() {
      let report = this.analyticReport();
      let report2 = [{ tourNumber: 0 }, { total: 0 }, { verifyAccount: 0 }];
      if (report.length !== 0) report2 = [...report];

      return (
         <div className="row">
            {/* Earnings (Monthly) Card Example */}
            <div className="col-xl-3 col-md-6 mb-4">
               <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                     <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                           <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                              Tổng thu trong năm
                           </div>
                           <div className="h5 mb-0 font-weight-bold text-gray-800">
                              {report2[1].total} VNĐ
                           </div>
                        </div>
                        <div className="col-auto">
                           <i className="fas fa-calendar fa-2x text-gray-300" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* Earnings (Monthly) Card Example */}
            <div className="col-xl-3 col-md-6 mb-4">
               <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                     <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                           <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                              Số Tours (chưa đến lịch)
                           </div>
                           <div className="h5 mb-0 font-weight-bold text-gray-800">
                              {report2[0].tourNumber} Tours
                           </div>
                        </div>
                        <div className="col-auto">
                           <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* Earnings (Monthly) Card Example */}
            <div className="col-xl-3 col-md-6 mb-4">
               <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                     <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                           <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                              Tổng số người dùng đăng ký
                           </div>
                           <div className="h5 mb-0 font-weight-bold text-gray-800">
                              {report2[2].verifyAccount} Người
                           </div>
                        </div>
                        <div className="col-auto">
                           <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* Pending Requests Card Example */}
            <div className="col-xl-3 col-md-6 mb-4">
               <div className="card border-left-warning shadow h-100 py-2">
                  <div className="card-body">
                     <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                           <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                              Yêu cầu đang chờ xử lý
                           </div>
                           <div className="h5 mb-0 font-weight-bold text-gray-800">
                              08 Request
                           </div>
                        </div>
                        <div className="col-auto">
                           <i className="fas fa-comments fa-2x text-gray-300" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
ReportViewNumberContainer.propTypes = {
   classes: PropTypes.object,
   reportAllActions: PropTypes.shape({
      fetchReportRequest: PropTypes.func
   }),
   report: PropTypes.array
};

const mapStateToProps = state => {
   return {
      report: state.report.report
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
)(ReportViewNumberContainer);
