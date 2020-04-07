import React, { Component } from "react";

import { Form, Input, Button, DatePicker, Radio, Tooltip } from "antd";

import { getParamTokenWithName } from "../../_commons/auth.service";

const idAccount = getParamTokenWithName("idAccount");
const { TextArea } = Input;

class TableNewNotification extends Component {
   state = {
      expand: false,
      value: "",
      type: "",
      status: "",
      title: "",
      contentNotification: "",
      noticeTo: "",
      dateTime: {},
      idAccount: idAccount,
   };

   onChange = (event) => {
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState({
         [name]: value,
      });
   };

   onChangeType = (values) => {
      this.setState({
         type: values.target.value,
      });
   };
   onChangeStatus = (values) => {
      this.setState({
         status: values.target.value,
      });
   };
   onChangeNoticeTo = (values) => {
      this.setState({
         noticeTo: values.target.value,
      });
   };

   onChangeDate = (value, dateString) => {
      this.setState({ dateTime: dateString });
   };

   onOK = (value) => {
      this.setState({ dateTime: value });
   };

   handleReset = () => {
      this.props.form.resetFields();
   };

   toggle = () => {
      const { expand } = this.state;
      this.setState({ expand: !expand });
   };
   handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, fieldsValue) => {
         if (err) {
            return;
         }
      });

      const { title, contentNotification } = this.state;
      if (title !== "" && contentNotification !== "") {
         const { handleAdd, onCancle } = this.props;
         handleAdd(this.state);
         onCancle();
      }
   };

   handleChange = (target) => {
      this.setState({ vocationTime: target.label });
   };

   render() {
      const formItemLayout = {
         labelCol: {
            xs: { span: 24 },
            sm: { span: 24 },
            md: { span: 6 },
         },
         wrapperCol: {
            xs: { span: 24 },
            sm: { span: 24 },
            md: { span: 6 },
         },
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
                  <div className="ht-new-tour-left col-md-5">
                     <Form.Item
                        label={`Title: `}
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                     >
                        {getFieldDecorator(`title`, {
                           rules: [
                              {
                                 required: true,
                                 message: "Title Notification input something!",
                              },
                           ],
                        })(
                           <Input
                              name="title"
                              placeholder="Title Notification is"
                              className="ant-form-item"
                              onChange={this.onChange}
                           />
                        )}
                     </Form.Item>
                     <Form.Item
                        label={`Type: `}
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                     >
                        {getFieldDecorator(`types`, {
                           //initialValue: "Info",
                           rules: [
                              {
                                 required: true,
                                 message: "Select type!",
                              },
                           ],
                        })(
                           <Radio.Group
                              buttonStyle="solid"
                              onChange={this.onChangeType}
                           >
                              <Radio.Button value="Info">Info</Radio.Button>
                              <Radio.Button value="Success">
                                 Success
                              </Radio.Button>
                              <Radio.Button value="Error">Error</Radio.Button>
                           </Radio.Group>
                        )}
                     </Form.Item>
                     <Form.Item
                        label={`Status: `}
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                     >
                        {getFieldDecorator(`statuses`, {
                           //  initialValue: "Created",
                           rules: [
                              {
                                 required: true,
                                 message: "Select status!",
                              },
                           ],
                        })(
                           <Radio.Group
                              buttonStyle="solid"
                              onChange={this.onChangeStatus}
                           >
                              <Tooltip title="Tạo và đang chờ gửi">
                                 <Radio.Button value="Created">
                                    Created
                                 </Radio.Button>
                              </Tooltip>
                              <Tooltip title="Đang gửi" disabled>
                                 <Radio.Button value="Sending">
                                    Sending
                                 </Radio.Button>
                              </Tooltip>
                              <Tooltip title="Đã gửi" disabled>
                                 <Radio.Button value="Sent" disabled>
                                    Sent
                                 </Radio.Button>
                              </Tooltip>
                           </Radio.Group>
                        )}
                     </Form.Item>
                  </div>
                  <div className="ht-new-tour-right col-md-7">
                     <Form.Item
                        label={`Content Notification: `}
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                     >
                        {getFieldDecorator(`contentNotification`, {
                           setFieldsValue: this.state.value,
                           rules: [
                              {
                                 required: true,
                                 message: "Write something!",
                              },
                           ],
                        })(
                           <TextArea
                              name="contentNotification"
                              placeholder="Description on your tour pay"
                              autoSize
                              onChange={this.onChange}
                           />
                        )}
                     </Form.Item>
                     <Form.Item
                        label={`Datetime Notice: `}
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                     >
                        {getFieldDecorator(`departure`, {
                           rules: [
                              {
                                 required: true,
                                 message: "Select date and time!",
                              },
                           ],
                        })(
                           <DatePicker
                              name="dateTime"
                              showTime
                              format="HH:mm DD-MM-YYYY"
                              onChange={this.onChangeDate}
                              onOk={this.onOk}
                           />
                        )}
                     </Form.Item>{" "}
                     <Form.Item
                        label={`Notice To: `}
                        className="ant-form-item-control-wrapper col-md-12 mb-1"
                     >
                        {getFieldDecorator(`noticeToes`, {
                           //      initialValue: "All",
                           rules: [
                              {
                                 required: true,
                                 message: "Select noticeto!",
                              },
                           ],
                        })(
                           <Radio.Group
                              buttonStyle="solid"
                              onChange={this.onChangeNoticeTo}
                           >
                              <Tooltip title="Tất cả người dùng">
                                 <Radio.Button value="All">All</Radio.Button>
                              </Tooltip>
                              <Tooltip title="Chỉ những đối tượng có tài khoản">
                                 <Radio.Button value="Account">
                                    Account
                                 </Radio.Button>
                              </Tooltip>
                              <Tooltip title="Chỉ những khách">
                                 <Radio.Button value="Guest">
                                    Guest
                                 </Radio.Button>
                              </Tooltip>
                           </Radio.Group>
                        )}
                     </Form.Item>
                  </div>
               </div>
               <div className="ht-form-footer col-md-12">
                  <p className="ht-no-p-m mr-4 mb-1">
                     You can edit your travle schedule how you expand record
                     tour (+)
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

export default TableNewNotification = Form.create({ name: "new_notification" })(
   TableNewNotification
);
