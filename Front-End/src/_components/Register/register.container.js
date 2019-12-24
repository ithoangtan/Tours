import React from "react";

import {
   Form,
   Input,
   Tooltip,
   Icon,
   Cascader,
   Select,
   Checkbox,
   Button,
   AutoComplete,
   message,
   Spin
} from "antd";

import { mapAddressNotWardToOptionAntd } from "../../BookTourPage/addressVN";

import { Link, Redirect } from "react-router-dom";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as authActions from "../../_actions/auth.actions";

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationContainer extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         email: "",
         password: "",
         redirect: false,
         confirmDirty: false,
         autoCompleteResult: [],
         loading: false
      };
   }

   handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll(async (err, values) => {
         if (!err) {
            //Gọi API
            const { authAllActions } = this.props;
            const { fetchRegisterRequest } = authAllActions;
            let data = {
               ...values,
               role: "user",
               name: values.username,
               phone: values.prefix + values.phone
            };
            message.loading("Register...", 1);
            await fetchRegisterRequest(data);
         } else {
            throw err;
         }
      });
   };

   componentDidUpdate() {
      if (
         this.props.auth.email !== "" &&
         this.props.auth.email !== undefined &&
         this.props.auth.email !== null
      ) {
         this.setState({
            redirect: true,
            loading: false
         });
      }
   }

   haveRedirect() {
      if (this.state.redirect === true) {
         this.setState({ redirect: false });
         return <Redirect to="/login" />;
      }
   }

   handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
   };

   compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue("password")) {
         callback("Two passwords that you enter is inconsistent!");
      } else {
         callback();
      }
   };

   validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
         form.validateFields(["confirm"], { force: true });
      }
      callback();
   };

   handleWebsiteChange = value => {
      let autoCompleteResult;
      if (!value) {
         autoCompleteResult = [];
      } else {
         autoCompleteResult = [".com", ".vn", ".org", ".net"].map(
            domain => `${value}${domain}`
         );
      }
      this.setState({ autoCompleteResult });
   };

   waitLoading = () => {
      this.setState({ loading: true });
   };

   render() {
      const { getFieldDecorator } = this.props.form;
      const { autoCompleteResult } = this.state;

      const formItemLayout = {
         labelCol: {
            xs: { span: 24 },
            sm: { span: 8 }
         },
         wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 }
         }
      };
      const tailFormItemLayout = {
         wrapperCol: {
            xs: {
               span: 24,
               offset: 0
            },
            sm: {
               span: 16,
               offset: 8
            }
         }
      };
      const prefixSelector = getFieldDecorator("prefix", {
         initialValue: "84"
      })(
         <Select style={{ width: 70 }}>
            <Option value="84">+84</Option>
         </Select>
      );

      const websiteOptions = autoCompleteResult.map(website => (
         <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
      ));

      return (
         <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Spin
               tip="Đang xác thực thông tin..."
               spinning={this.state.loading}
               size="large"
            >
               {this.haveRedirect()}
               <Form.Item label="E-mail">
                  {getFieldDecorator("email", {
                     rules: [
                        {
                           type: "email",
                           message: "The input is not valid E-mail!"
                        },
                        {
                           required: true,
                           message: "Please input your E-mail!"
                        }
                     ]
                  })(<Input />)}
               </Form.Item>
               <Form.Item label="Password" hasFeedback>
                  {getFieldDecorator("password", {
                     rules: [
                        {
                           required: true,
                           message: "Please input your password!"
                        },
                        {
                           validator: this.validateToNextPassword
                        }
                     ]
                  })(<Input.Password />)}
               </Form.Item>
               <Form.Item label="Confirm Password" hasFeedback>
                  {getFieldDecorator("confirm", {
                     rules: [
                        {
                           required: true,
                           message: "Please confirm your password!"
                        },
                        {
                           validator: this.compareToFirstPassword
                        }
                     ]
                  })(<Input.Password onBlur={this.handleConfirmBlur} />)}
               </Form.Item>
               <Form.Item
                  label={
                     <span>
                        Nickname&nbsp;
                        <Tooltip title="What do you want others to call you?">
                           <Icon type="question-circle-o" />
                        </Tooltip>
                     </span>
                  }
               >
                  {getFieldDecorator("username", {
                     rules: [
                        {
                           required: true,
                           message: "Please input your username!",
                           whitespace: true
                        }
                     ]
                  })(<Input />)}
               </Form.Item>
               <Form.Item label="Habitual Residence">
                  {getFieldDecorator("address", {
                     initialValue: ["Hồ Chí Minh", "Thủ Đức"],
                     rules: [
                        {
                           type: "array",
                           required: true,
                           message: "Please select your habitual residence!"
                        }
                     ]
                  })(<Cascader options={mapAddressNotWardToOptionAntd()} />)}
               </Form.Item>
               <Form.Item label="Phone Number">
                  {getFieldDecorator("phone", {
                     rules: [
                        {
                           required: true,
                           message: "Please input your phone number!"
                        }
                     ]
                  })(
                     <Input
                        addonBefore={prefixSelector}
                        style={{ width: "100%" }}
                     />
                  )}
               </Form.Item>
               <Form.Item label="Website">
                  {getFieldDecorator("website")(
                     <AutoComplete
                        dataSource={websiteOptions}
                        onChange={this.handleWebsiteChange}
                        placeholder="website"
                     >
                        <Input />
                     </AutoComplete>
                  )}
               </Form.Item>
               {/* <Form.Item
               label="Captcha"
               extra="We must make sure that your are a human."
            >
               <Row gutter={8}>
                  <Col span={12}>
                     {getFieldDecorator("captcha", {
                        rules: [
                           {
                              required: true,
                              message: "Please input the captcha you got!"
                           }
                        ]
                     })(<Input />)}
                  </Col>
                  <Col span={12}>
                     <Button>Get captcha</Button>
                  </Col>
               </Row>
            </Form.Item> */}
               <Form.Item {...tailFormItemLayout}>
                  {getFieldDecorator("agreement", {
                     valuePropName: "checked"
                  })(
                     <Checkbox>
                        I have read the{" "}
                        <a
                           href="https://github.com/ithoangtan"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           agreement
                        </a>
                     </Checkbox>
                  )}
               </Form.Item>
               <Form.Item {...tailFormItemLayout}>
                  <Button
                     type="primary"
                     htmlType="submit"
                     onClick={this.waitLoading}
                  >
                     Register
                  </Button>
                  <br></br>
                  Bạn đã có tài khoản? <Link to="/login">Login</Link>
               </Form.Item>
            </Spin>
         </Form>
      );
   }
}

const WrappedRegistrationContainer = Form.create({ name: "register" })(
   RegistrationContainer
);

WrappedRegistrationContainer.propTypes = {
   classes: PropTypes.object,
   authAllActions: PropTypes.shape({
      fetchRegisterRequest: PropTypes.func
   }),
   auth: PropTypes.array
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
)(WrappedRegistrationContainer);
