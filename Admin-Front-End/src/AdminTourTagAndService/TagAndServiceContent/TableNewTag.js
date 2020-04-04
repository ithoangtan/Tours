import React, { Component } from "react";

import { Form, Input, Button } from "antd";

class TableNewRow extends Component {
   state = {
      expand: false,
      value: "",
      name: ""
   };

   onChange = event => {
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState({
         [name]: value
      });
   };

   handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, fieldsValue) => {
         if (err) {
            return;
         }
      });

      const { name } = this.state;
      if (name !== "") {
         const { handleAdd, onCancle } = this.props;
         handleAdd(this.state);
         onCancle();
      }
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
               <div className="ht-new-tour col-md-12 ht-d-flex-col-start-start">
                  <Form.Item
                     label={`Name Tag: `}
                     className="ant-form-item-control-wrapper col-md-12 mb-1"
                  >
                     {getFieldDecorator(`name-tag`, {
                        rules: [
                           {
                              required: true,
                              message: "Tag input something!"
                           }
                        ]
                     })(
                        <Input
                           name="name"
                           placeholder="Tên Tag là"
                           className="ant-form-item"
                           onChange={this.onChange}
                        />
                     )}
                  </Form.Item>
                  <div className="ht-d-flex-row-end-end col-md-12">
                     <Button
                        style={{ marginLeft: 12 }}
                        onClick={onCancle}
                        className="mr-2"
                     >
                        Cancle
                     </Button>{" "}
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
                  </div>
               </div>
            </div>
         </Form>
      );
   }
}

export default TableNewRow = Form.create({ name: "new_tour" })(TableNewRow);
