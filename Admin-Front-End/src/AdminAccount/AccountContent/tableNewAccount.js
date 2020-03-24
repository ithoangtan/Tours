import React, { Component } from "react";

import { Form, Input, Button, DatePicker, Select, Radio } from "antd";

import { getParamTokenWithName } from "../../_commons/auth.service";

const idAccount = getParamTokenWithName("idAccount");

class TableNewRow extends Component {
   state = {
      expand: false,
      value: "",
      titleTour: "",
      price: 10,
      sale: 0,
      address: "",
      vocationTime: "2 Ngày 1 Đêm",
      departureDay: new Date()
         .toJSON()
         .slice(0, 10)
         .replace(/-/g, "-"),
      describe: "",
      idAccount: idAccount,
      reuse: 0
   };

   onChange = event => {
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState({
         [name]: value
      });
   };

   onChangeDate = (value, dateString) => {
      this.setState({ departureDay: dateString });
   };

   onOK = value => {
      this.setState({ departureDay: value });
   };

   onChangeSale = value => {
      this.setState({ sale: value });
   };
   onChangeReuse = value => {
      this.setState({ reuse: value });
   };
   onChangePrice = value => {
      this.setState({ price: value });
   };

   handleReset = () => {
      this.props.form.resetFields();
   };

   toggle = () => {
      const { expand } = this.state;
      this.setState({ expand: !expand });
   };
   handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, fieldsValue) => {
         if (err) {
            return;
         }
      });

      const { titleTour, describe, address } = this.state;
      if (titleTour !== "" && describe !== "" && address !== "") {
         const { handleAdd, onCancle } = this.props;
         handleAdd(this.state);
         onCancle();
      }
   };

   handleChange = target => {
      this.setState({ vocationTime: target.label });
   };

   render() {
      const formItemLayout = {
         labelCol: {
            xs: { span: 24 },
            sm: { span: 24 },
            md: { span: 4 }
         },
         wrapperCol: {
            xs: { span: 24 },
            sm: { span: 24 },
            md: { span: 4 }
         }
      };
      const { onCancle } = this.props;
      const { getFieldDecorator } = this.props.form;
      return (
         <Form
            {...formItemLayout}
            onSubmit={this.handleSubmit}
            className="ant-form-new-tour"
         >
            <div className="ht-d-flex-col">
               <div className="ht-new-tour col-md-12">
                  <div className="ht-new-tour-left col-md-6">
                     <Form.Item
                        label={`Name: `}
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                     >
                        {getFieldDecorator(`name`, {
                           rules: [
                              {
                                 required: true,
                                 message: "Name input something!"
                              }
                           ]
                        })(
                           <Input
                              name="name"
                              placeholder="Name is"
                              className="ant-form-item"
                              onChange={this.onChange}
                           />
                        )}
                     </Form.Item>
                     <Form.Item
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                        label={`Email: `}
                     >
                        {getFieldDecorator(`email`, {
                           rules: [
                              {
                                 required: true,
                                 message: "Email input something!"
                              }
                           ]
                        })(
                           <Input
                              type="email"
                              name="email"
                              placeholder="Email is"
                              className="ant-form-item"
                              onChange={this.onChange}
                           />
                        )}
                     </Form.Item>
                     <Form.Item
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                        label={`Phone: `}
                     >
                        {getFieldDecorator(`phone`, {
                           rules: [
                              {
                                 required: true,
                                 message: "Phone input something!"
                              }
                           ]
                        })(
                           <Input
                              name="phone"
                              placeholder="Phone is"
                              className="ant-form-item"
                              onChange={this.onChange}
                           />
                        )}
                     </Form.Item>
                     <Form.Item
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                        label={`Username: `}
                     >
                        {getFieldDecorator(`username`, {
                           rules: [
                              {
                                 required: true,
                                 message: "Username input something!"
                              }
                           ]
                        })(
                           <Input
                              name="username"
                              placeholder="Username is"
                              className="ant-form-item"
                              onChange={this.onChange}
                           />
                        )}
                     </Form.Item>

                     <Form.Item
                        label={`Gender:`}
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                     >
                        {getFieldDecorator(`gender`, {
                           initialValue: { key: "Nam" },
                           rules: [
                              {
                                 required: true,
                                 message: "select same day!"
                              }
                           ]
                        })(
                           <Select
                              name="gender"
                              labelInValue
                              // style={{ width: 195 }}
                              onChange={this.handleChange}
                           >
                              <Select.Option value="male">Nam</Select.Option>
                              <Select.Option value="female">Nữ</Select.Option>
                              <Select.Option value="more">Khác</Select.Option>
                           </Select>
                        )}
                     </Form.Item>
                  </div>
                  <div className="ht-new-tour-right col-md-6">
                     <Form.Item
                        label={`Birthdate: `}
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                     >
                        {getFieldDecorator(`birthdate`, {
                           rules: [
                              {
                                 required: true,
                                 message: "Select date and time!"
                              }
                           ]
                        })(
                           <DatePicker
                              name="birthdate"
                              format="YYYY-MM-DD"
                              onChange={this.onChangeDate}
                              onOk={this.onOk}
                           />
                        )}
                     </Form.Item>

                     <Form.Item
                        label={`Address: `}
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                     >
                        {getFieldDecorator(`address`, {
                           rules: [
                              {
                                 required: true,
                                 message: "Input something!"
                              }
                           ]
                        })(
                           <Input
                              name="address"
                              placeholder="Address are..."
                              className="ant-form-item"
                              onChange={this.onChange}
                           />
                        )}
                     </Form.Item>
                     <Form.Item
                        label={`Website: `}
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                     >
                        {getFieldDecorator(`website`, {
                           rules: [
                              {
                                 required: true,
                                 message: "Input something!"
                              }
                           ]
                        })(
                           <Input
                              name="website"
                              placeholder="Website are..."
                              className="ant-form-item"
                              onChange={this.onChange}
                           />
                        )}
                     </Form.Item>
                     <Form.Item
                        label={`Type: `}
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                     >
                        {getFieldDecorator(`type`, {
                           rules: [
                              {
                                 required: true,
                                 message: "Select type!"
                              }
                           ]
                        })(
                           <Radio.Group buttonStyle="solid">
                              <Radio.Button value="account">
                                 Account
                              </Radio.Button>
                              <Radio.Button value="guest" disabled>
                                 Guest
                              </Radio.Button>
                           </Radio.Group>
                        )}
                     </Form.Item>
                     <Form.Item
                        label={`Role: `}
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                     >
                        {getFieldDecorator(`role`, {
                           rules: [
                              {
                                 required: true,
                                 message: "Select role!"
                              }
                           ]
                        })(
                           <Radio.Group buttonStyle="solid">
                              <Radio.Button value="administrator">
                                 Admin
                              </Radio.Button>
                              <Radio.Button value="user" disabled>
                                 User
                              </Radio.Button>
                           </Radio.Group>
                        )}
                     </Form.Item>
                  </div>
               </div>
               <div className="ht-form-footer col-md-12">
                  <p className="ht-no-p-m mr-4 mb-1 mr-2">
                     You can edit your avatar how you expand record tour (+)
                  </p>
                  <Button type="dashed" onClick={this.handleReset}>
                     Clear
                  </Button>
                  <Button
                     type="primary"
                     htmlType="submit"
                     style={{ marginLeft: 12 }}
                     icon="plus"
                  >
                     Add
                  </Button>
                  <Button style={{ marginLeft: 12 }} onClick={onCancle}>
                     Cancle
                  </Button>
               </div>
            </div>
         </Form>
      );
   }
}

export default TableNewRow = Form.create({ name: "new_tour" })(TableNewRow);
