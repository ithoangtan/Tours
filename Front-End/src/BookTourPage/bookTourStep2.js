import React, { Component } from "react";

import {
   Form,
   Input,
   Tooltip,
   Icon,
   Cascader,
   InputNumber,
   Button,
   message
} from "antd";

import { mapAddressToOptionAntd } from "./addressVN";

const tailFormItemLayout = {
   wrapperCol: {
      xs: {
         span: 12,
         offset: 8
      },
      sm: {
         span: 12,
         offset: 8
      }
   }
};

class BookTourStep2 extends Component {
   state = {
      confirmDirty: false,
      autoCompleteResult: []
   };

   handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
         if (!err) {
            message.success("OK! Bây giờ bạn có thể đến bước tiếp theo rồi");
            this.props.step2OK();
            //    const { authAllActions } = this.props;
            //    const { fetchLoginRequest } = authAllActions;
            //    fetchLoginRequest(values);
            //Lưu thông tin vào storage
            localStorage.setItem("name", values.name);
            localStorage.setItem("email", values.email);
            localStorage.setItem("phone", values.phone);
            localStorage.setItem("numberChildren", values.numberChildren);
            localStorage.setItem("numberPeople", values.numberPeople);
            localStorage.setItem("province", values.residence[0]);
            localStorage.setItem("district", values.residence[1]);
            localStorage.setItem("ward", values.residence[2]);
            //Đến khi người dùng ấn done mới tiến hành lưu xuống CSDL
            console.log("Received values of form: ", values);
         }
      });
   };

   handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({
         confirmDirty: this.state.confirmDirty || !!value
      });
   };

   initValue(name) {
      if (name === "name") return localStorage.getItem("name");
      if (name === "email") return localStorage.getItem("email");
      if (name === "phone") return localStorage.getItem("phone");
      if (name === "numberPeople") return localStorage.getItem("numberPeople");
      if (name === "numberChildren")
         return localStorage.getItem("numberChildren");
      if (name === "address")
         return [
            localStorage.getItem("province"),
            localStorage.getItem("district"),
            localStorage.getItem("ward")
         ];
   }

   render() {
      const { getFieldDecorator } = this.props.form;

      const formItemLayout = {
         labelCol: {
            xs: { span: 24 },
            sm: { span: 8 }
         },
         wrapperCol: {
            xs: { span: 24 },
            sm: { span: 12 }
         }
      };

      return (
         <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item
               label={
                  <span>
                     Tên&nbsp;
                     <Tooltip title="Bạn sẽ được chúng tôi gọi là?">
                        <Icon type="question-circle-o" />
                     </Tooltip>
                  </span>
               }
            >
               {getFieldDecorator("name", {
                  initialValue: this.initValue("name"),
                  rules: [
                     {
                        required: true,
                        message: "Xin hãy cho chúng tôi biết tên của bạn!"
                     }
                  ]
               })(<Input placeholder="Họ và tên của bạn" />)}
            </Form.Item>
            <Form.Item label="E-mail">
               {getFieldDecorator("email", {
                  initialValue: this.initValue("email"),
                  rules: [
                     {
                        type: "email",
                        message: "Hãy nhập một E-mail hợp lệ á nè!"
                     },
                     {
                        required: true,
                        message: "Xin hãy cho chúng tôi biết E-mail của bạn!"
                     }
                  ]
               })(<Input placeholder="Địa chỉ mail của bạn" />)}
            </Form.Item>
            <Form.Item
               label={
                  <span>
                     Địa chỉ&nbsp;
                     <Tooltip title="Chúng tôi cần biết địa chỉ của bạn!">
                        <Icon type="question-circle-o" />
                     </Tooltip>
                  </span>
               }
            >
               {getFieldDecorator("residence", {
                  initialValue: this.initValue("address"),
                  rules: [
                     {
                        type: "array",
                        required: true,
                        message: "Xin hãy chọn nơi cư trú của bạn!"
                     }
                  ]
               })(
                  <Cascader
                     options={mapAddressToOptionAntd()}
                     placeholder="Hãy chọn nơi cư trú của bạn"
                  />
               )}
            </Form.Item>
            <Form.Item
               label={
                  <span>
                     Số điện thoại&nbsp;
                     <Tooltip title="Có thể chúng tôi sẽ gọi cho bạn!">
                        <Icon type="question-circle-o" />
                     </Tooltip>
                  </span>
               }
            >
               {getFieldDecorator("phone", {
                  initialValue: this.initValue("phone"),
                  rules: [
                     {
                        required: true,
                        message:
                           "Có thể cho chúng tôi số điện thoại để liên hệ chứ!"
                     }
                  ]
               })(
                  <Input
                     style={{ width: "100%" }}
                     placeholder="Số điện thoại của bạn"
                  />
               )}
            </Form.Item>
            <Form.Item
               label={
                  <span>
                     Số người tham gia&nbsp;
                     <Tooltip title="Bạn có ai cùng đi với bạn chứ?">
                        <Icon type="question-circle-o" />
                     </Tooltip>
                  </span>
               }
            >
               {getFieldDecorator("numberPeople", {
                  initialValue: this.initValue("numberPeople"),
                  rules: [
                     {
                        required: true,
                        message: "Xin hãy cho chúng tôi biết số lượng người!"
                     }
                  ]
               })(<InputNumber style={{ width: "100%" }} min={0} max={100} />)}
            </Form.Item>
            <Form.Item
               label={
                  <span>
                     Số trẻ tham gia&nbsp;
                     <Tooltip
                        title={`Bạn có trẻ con cùng đi với bạn không? 
                     Giá vé tour sẽ bằng một nửa so với giá vé người lớn
                     Trẻ con cao dưới 1m2 bạn nhé!`}
                     >
                        <Icon type="question-circle-o" />
                     </Tooltip>
                  </span>
               }
            >
               {getFieldDecorator("numberChildren", {
                  initialValue: this.initValue("numberChildren")
               })(<InputNumber style={{ width: "100%" }} min={0} max={10} />)}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
               <Tooltip
                  placement="bottom"
                  title={"Thông tin của bạn sẽ được bảo mật!"}
               >
                  <Button
                     type="primary"
                     htmlType="submit"
                     style={{ width: "100%" }}
                  >
                     Xác nhận thông tin của bạn là chính xác!
                  </Button>
               </Tooltip>
            </Form.Item>
         </Form>
      );
   }
}

const WrappedBookTourStep2 = Form.create({ name: "bookstep2" })(BookTourStep2);

export default WrappedBookTourStep2;
