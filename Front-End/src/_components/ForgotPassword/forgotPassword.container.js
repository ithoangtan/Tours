import React, { Component } from "react";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as authActions from "../../_actions/auth.actions";

import { Icon, Input, Button, message } from "antd";
import { Form } from "@ant-design/compatible";
import ResultDynamic from "../../ResultBoardPage/Result";

class ForgotPasswordContainer extends Component {
   handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
         if (!err) {
            const { authAllActions } = this.props;
            const { fetchForgotPasswordStep1Request } = authAllActions;
            let data = { ...values };
            message.loading("Checking...", 1);
            fetchForgotPasswordStep1Request(data);
         } else {
            throw err;
         }
      });
   };

   render() {
      const { getFieldDecorator } = this.props.form;
      const email = sessionStorage.getItem("email");
      return (
         <Form onSubmit={this.handleSubmit} className="login-form">
            {!this.props.auth.email ? (
               <div>
                  <Form.Item>
                     {getFieldDecorator("email", {
                        initialValue:
                           email !== null && email !== undefined && email !== ""
                              ? email
                              : "",
                        rules: [
                           {
                              required: true,
                              message: "Please input your email!"
                           }
                        ]
                     })(
                        <Input
                           style={{ width: "350px" }}
                           name="email"
                           prefix={
                              <Icon
                                 type="mail"
                                 style={{ color: "rgba(0,0,0,.25)" }}
                              />
                           }
                           placeholder="Email"
                        />
                     )}
                  </Form.Item>
                  <Form.Item>
                     <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                     >
                        Gửi link để xác nhận
                     </Button>
                     <Link to="/login">
                        <Button className="login-form-button">
                           Đăng nhập ngay!
                        </Button>
                     </Link>
                  </Form.Item>
               </div>
            ) : (
               <ResultDynamic
                  status="sucess"
                  title={
                     <div>
                        Hãy kiểm tra email của bạn <br></br>{" "}
                        <a
                           href="https://mail.google.com"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           {this.props.auth.email}
                        </a>{" "}
                        và tạo mật khẩu mới
                     </div>
                  }
                  toLink="/login"
                  nameButton="Đăng nhập ngay!"
                  typeButton="primary"
               />
            )}
         </Form>
      );
   }
}

const WrappedForgotPasswordForm = Form.create({ name: "forgot-password" })(
   ForgotPasswordContainer
);

WrappedForgotPasswordForm.propTypes = {
   classes: PropTypes.object,
   authAllActions: PropTypes.shape({
      fetchForgotPasswordStep1Request: PropTypes.func
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
)(WrappedForgotPasswordForm);
