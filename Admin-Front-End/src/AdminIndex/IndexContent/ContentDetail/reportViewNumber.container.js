import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as reportActions from "../../../_actions/report.actions";

import * as INDEX_CONSTANTS from "../../../_constants/index.constants";
import funcLoadJs from "../../../_constants/loadJs.constants";

import NumberFormat from "react-number-format";

class ReportViewNumberContainer extends Component {
   componentDidMount() {
      funcLoadJs(INDEX_CONSTANTS.AdminArrayExternalScript);
   }

   fetch = async () => {};

   componentWillMount() {
      const { reportAllActions } = this.props;
      const { fetchReportRequest } = reportAllActions;
      fetchReportRequest();
   }
   render() {
      let report = this.props.report;
      if (report.total === undefined) return <div></div>;

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
                              <NumberFormat
                                 value={report.total}
                                 displayType={"text"}
                                 thousandSeparator={true}
                                 prefix={""}
                                 suffix={" VNĐ"}
                              />
                           </div>
                        </div>
                        <div className="col-auto">
                           <i className="fas fa-dollar-sign fa-2x text-primary" />
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
                              {report.tourNumber} / {report.tourTotalNumber}{" "}
                              Tours
                           </div>
                        </div>
                        <div className="col-auto">
                           <i className="fas fa-umbrella-beach fa-2x text-success" />
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
                              {report.verifyAccount} Người
                           </div>
                        </div>
                        <div className="col-auto">
                           <i className="fas fa-user-check fa-2x text-success" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* Pending Requests Card Example */}
            <div className="col-xl-3 col-md-6 mb-4">
               <div className="card border-left-warning shadow h-100 py-2">
                  <div className="card-body ">
                     <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                           <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                              Yêu cầu đang chờ xử lý
                           </div>
                           <div className="h5 mb-0 font-weight-bold text-gray-800">
                              {report.totalRequestNotification +
                                 report.totalRequestMail}{" "}
                              Request
                           </div>
                        </div>
                        <div className="col-auto">
                           <i className="fas fa-clipboard-list fa-2x text-warning" />
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
   report: PropTypes.object
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
