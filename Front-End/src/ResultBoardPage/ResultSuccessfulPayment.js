import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Result, Button } from "antd";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as orderActions from "../_actions/order.actions";
class ResultSuccessful extends Component {
   componentDidMount() {
      const { orderAllActions } = this.props;
      const { fetchSetStatusPaidRequest } = orderAllActions;
      // console.log(this.props.location.query.order_code);
      const search = window.location.search;
      const params = new URLSearchParams(search);
      const PIN = params.get("order_code");
      const data = { PIN: PIN };
      fetchSetStatusPaidRequest(data);
   }
   render() {
      // const { params } = this.props.match;
      return (
         <Result
            status={`success`}
            title={<div>Tour của bạn đã được thanh toán thành công!</div>}
            subTitle={
               <div>
                  {`Tour của bạn đã được thanh toán!`}
                  <p>
                     Chúng tôi sẽ gửi mail cho bạn để xác nhận đã thanh toán với
                     mã PIN và đơn hàng, Xin hãy kiểm tra và lưu lại!
                  </p>
               </div>
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
ResultSuccessful.propTypes = {
   classes: PropTypes.object,
   orderAllActions: PropTypes.shape({
      fetchSetStatusPaidRequest: PropTypes.func,
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
export default connect(mapStateToProps, mapDispatchToProps)(ResultSuccessful);
