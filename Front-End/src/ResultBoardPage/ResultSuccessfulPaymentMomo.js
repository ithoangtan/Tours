import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Result, Button } from "antd";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as orderActions from "../_actions/order.actions";
import { MOMO_ERROR_CODE } from "../_constants/index.constants";

class ResultSuccessfulMomo extends Component {
   constructor(props) {
      super(props);
      this.state = {
         errorCode: "",
         message: "",
      };
   }

   componentDidMount() {
      const { orderAllActions } = this.props;
      const {
         fetchSetStatusPaidRequest,
         fetchSetStatusFailedRequest,
      } = orderAllActions;
      const search = window.location.search;
      const params = new URLSearchParams(search);
      const PIN = params.get("orderId");
      const errorCode = params.get("errorCode");
      const message = params.get("message");
      const data = { PIN: PIN };
      if (errorCode === MOMO_ERROR_CODE.SUCCESS) {
         fetchSetStatusPaidRequest(data);
      } else {
         fetchSetStatusFailedRequest(data);
      }
      this.setState({ errorCode, message });
   }
   render() {
      const { errorCode, message } = this.state;
      return (
         <Result
            status={errorCode === MOMO_ERROR_CODE.SUCCESS ? `success` : `error`}
            title={
               <div>
                  {errorCode === MOMO_ERROR_CODE.SUCCESS
                     ? `Tour của bạn đã được thanh toán thành công!`
                     : `Tour của bạn thanh toán bị thất bại!`}
               </div>
            }
            subTitle={
               errorCode === MOMO_ERROR_CODE.SUCCESS ? (
                  <div>
                     {`Tour của bạn đã được thanh toán!`}
                     <p>
                        Chúng tôi sẽ gửi mail cho bạn để xác nhận đã thanh toán
                        với mã PIN và đơn hàng, Xin hãy kiểm tra và lưu lại!
                     </p>
                     {message}
                  </div>
               ) : (
                  <div>
                     {`Tour của bạn chưa được thanh toán!`}
                     <p>
                        Xin hãy kiểm tra và thanh toán lại hoặc liên hệ với
                        chúng tôi để được hỗ trợ nhanh nhất!
                     </p>
                     {message}
                  </div>
               )
            }
            extra={[
               <Link key="extra" to={{ pathname: "/" }}>
                  <Button type="dashed" key="console">
                     Đi đến trang chủ
                  </Button>
               </Link>,
            ]}
         />
      );
   }
}
ResultSuccessfulMomo.propTypes = {
   classes: PropTypes.object,
   orderAllActions: PropTypes.shape({
      fetchSetStatusPaidRequest: PropTypes.func,
      fetchSetStatusFailedRequest: PropTypes.func,
   }),
};

const mapStateToProps = (state) => {
   return {
      patch: state.order.patch,
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      orderAllActions: bindActionCreators(orderActions, dispatch),
   };
};
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ResultSuccessfulMomo);
