import React, { Component } from "react";

import { Link, Redirect } from "react-router-dom";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as authActions from "../../_actions/auth.actions";

import { Icon, Input, Button, Checkbox, message } from "antd";
import { Form } from "@ant-design/compatible";

class LoginContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         email: "",
         password: "",
         redirect: false,
         role: ""
      };
   }

   componentWillMount() {
      const name = sessionStorage.getItem("name");
      if (name !== "" && name !== undefined && name !== null) {
         this.setState({
            redirect: true
         });
      }
   }

   componentWillUpdate(nextProps) {
      if (
         nextProps.auth.role !== "" &&
         nextProps.auth.role !== undefined &&
         nextProps.auth.role !== null
      ) {
         this.setState({
            redirect: true,
            role: nextProps.auth.role
         });
      }
   }

   haveRedirect() {
      const { redirect, role } = this.state;
      if (redirect === true) {
         this.setState({ redirect: false });
         return role === "user" ? (
            <Redirect to="/" />
         ) : (
            <Redirect to="/admin" />
         );
      }
   }

   handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
         if (!err) {
            const { authAllActions } = this.props;
            const { fetchLoginRequest } = authAllActions;
            let data = { ...values, role: "user" };
            message.loading("Login...", 1);
            fetchLoginRequest(data);
            sessionStorage.setItem("email", data.email);
         } else {
            throw err;
         }
      });
   };

   render() {
      const { getFieldDecorator } = this.props.form;
      const email = sessionStorage.getItem("email");
      return (
         <Form onSubmit={this.handleSubmit} className="login-form mt-1 mb-4">
            {this.haveRedirect()}
            <Form.Item className="pb-2">
               {getFieldDecorator("email", {
                  initialValue:
                     email !== null && email !== undefined && email !== ""
                        ? email
                        : "",
                  rules: [
                     { required: true, message: "Please input your email!" }
                  ]
               })(
                  <Input
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
            <Form.Item className="pb-2">
               {getFieldDecorator("password", {
                  rules: [
                     { required: true, message: "Please input your password!" }
                  ]
               })(
                  <Input.Password
                     name="password"
                     prefix={
                        <Icon
                           type="lock"
                           style={{ color: "rgba(0,0,0,.25)" }}
                        />
                     }
                     type="password"
                     placeholder="Password"
                     onChange={this.onChange}
                  />
               )}
            </Form.Item>
            <Form.Item>
               {getFieldDecorator("remember", {
                  valuePropName: "checked",
                  initialValue: true
               })(<Checkbox>Remember me</Checkbox>)}
               <Link className="login-form-forgot" to="/forgot-password">
                  Forgot password
               </Link>
               <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
               >
                  Log in
               </Button>
               <div className="d-flex">
                  <Button className="ht-login-fb">
                     <i className="fab fa-facebook"></i> Facebook
                  </Button>
                  <Button className="ht-login-gg">
                     <i className="fab fa-google"></i> Google
                  </Button>
               </div>
               Or <Link to="/register">register now!</Link>
            </Form.Item>
         </Form>
      );
   }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
   LoginContainer
);

WrappedNormalLoginForm.propTypes = {
   classes: PropTypes.object,
   authAllActions: PropTypes.shape({
      fetchLoginRequest: PropTypes.func
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
)(WrappedNormalLoginForm);
