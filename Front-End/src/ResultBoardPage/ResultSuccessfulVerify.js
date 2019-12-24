import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Result, Button } from "antd";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as authActions from "../_actions/auth.actions";

class ResultSuccessfulVerify extends Component {
   componentWillMount() {
      this.fetch();
   }

   fetch = async () => {
      const params = window.location.search;
      const { authAllActions } = this.props;
      const { fetchVerifyEmailRequest } = authAllActions;
      await fetchVerifyEmailRequest(params);
   };

   componentDidMount() {}

   render() {
      return (
         <Result
            status={`success`}
            title={<div>Email của bạn đã được xác nhận!</div>}
            subTitle={
               <div>{`Cảm ơn bạn đã đến với dịch vụ
                  của chúng tôi!`}</div>
            }
            extra={[
               <Link key="extra" to={{ pathname: "/" }}>
                  <Button type="primary" key="console">
                     Đi đến trang chủ
                  </Button>
               </Link>
            ]}
         />
      );
   }
}
ResultSuccessfulVerify.propTypes = {
   classes: PropTypes.object,
   authAllActions: PropTypes.shape({
      fetchVerifyEmailRequest: PropTypes.func
   }),
   auth: PropTypes.object
};

const mapStateToProps = state => {
   return {
      auth: state.auth.auth
   };
};
const mapDispatchToProps = dispatch => {
   return {
      authAllActions: bindActionCreators(authActions, dispatch)
      //Bên trái chỉ là đặt tên thôi, bên phải là tourActions ở bên tour.action.js
   };
};
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ResultSuccessfulVerify);
