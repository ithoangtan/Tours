import React, { Component } from "react";

import {
   InputNumber,
   Form,
   Row,
   Col,
   Input,
   Button,
   Icon,
   DatePicker,
   Select
} from "antd";

const { Option } = Select;

const { TextArea } = Input;

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
      describe: ""
   };
   // To generate mock Form.Item
   getFields() {
      const count = this.state.expand ? 10 : 6;
      const { getFieldDecorator } = this.props.form;
      let children = null,
         children1 = [],
         children2 = [],
         children3 = [];

      children1.push(
         <Col span={12} key={"title-tour"}>
            <Form.Item
               label={`Title Tour: `}
               className="ant-form-item-control-wrapper"
            >
               {getFieldDecorator(`title-tour`, {
                  rules: [
                     {
                        required: true,
                        message: "Title Tour input something!"
                     }
                  ]
               })(
                  <Input
                     name="titleTour"
                     placeholder="Title Tour is"
                     className="ant-form-item"
                     onChange={this.onChange}
                  />
               )}
            </Form.Item>
         </Col>
      );
      children1.push(
         <Col span={6} key={"price"}>
            <Form.Item
               label={`Price: `}
               className="ant-form-item-control-wrapper"
            >
               {getFieldDecorator(`price`, {
                  initialValue: 100,
                  rules: [
                     {
                        required: true,
                        message: "price is 0?"
                     }
                  ]
               })(
                  <InputNumber
                     name="price"
                     min={0}
                     step={10}
                     formatter={value =>
                        `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                     }
                     parser={value => value.replace(/\$\s?|(,*)/g, "")}
                     onChange={this.onChangePrice}
                  />
               )}
            </Form.Item>
         </Col>
      );

      children1.push(
         <Col span={6} key={"sale"}>
            <Form.Item
               label={`Sale: `}
               className="ant-form-item-control-wrapper"
            >
               {getFieldDecorator(`sale`, {
                  initialValue: 0,
                  rules: [
                     {
                        required: true,
                        message: "Input something!"
                     }
                  ]
               })(
                  <InputNumber
                     name="sale"
                     min={0}
                     max={100}
                     formatter={value => `${value}%`}
                     parser={value => value.replace("%", "")}
                     onChange={this.onChangeSale}
                     placeholder={"Sale"}
                  />
               )}
            </Form.Item>
         </Col>
      );
      children2.push(
         <Col span={12} key={"address"}>
            <Form.Item
               label={`Address: `}
               className="ant-form-item-control-wrapper"
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
         </Col>
      );
      children2.push(
         <Col span={12} key={"vocation-time"}>
            <Form.Item
               label={`Vocation Time:`}
               className="ant-form-item-control-wrapper"
            >
               {getFieldDecorator(`vocation-time`, {
                  initialValue: { key: "2-1" },
                  rules: [
                     {
                        required: true,
                        message: "select same day!"
                     }
                  ]
               })(
                  <Select
                     name="vocationTime"
                     labelInValue
                     style={{ width: 140 }}
                     onChange={this.handleChange}
                  >
                     <Select.Option value="2-1">2 Ngày 1 Đêm</Select.Option>
                     <Select.Option value="3-2">3 Ngày 2 Đêm</Select.Option>
                     <Select.Option value="4-3">4 Ngày 3 Đêm</Select.Option>
                     <Select.Option value="5-4">5 Ngày 4 Đêm</Select.Option>
                     <Select.Option value="6-5">6 Ngày 5 Đêm</Select.Option>
                     <Select.Option value="7-6">7 Ngày 6 Đêm</Select.Option>
                     <Select.Option value="8-7">8 Ngày 7 Đêm</Select.Option>
                     <Select.Option value="9-8">9 Ngày 8 Đêm</Select.Option>
                     <Select.Option value="10-8">10 Ngày 9 Đêm</Select.Option>
                  </Select>
               )}
            </Form.Item>
         </Col>
      );
      children3.push(
         <Col span={12} key={"describe"}>
            <Form.Item
               label={`Describe: `}
               className="ant-form-item-control-wrapper"
            >
               {getFieldDecorator(`describe`, {
                  setFieldsValue: this.state.value,
                  rules: [
                     {
                        required: true,
                        message: "Write something!"
                     }
                  ]
               })(
                  <TextArea
                     name="describe"
                     placeholder="Description on your tour pay"
                     autoSize
                     onChange={this.onChange}
                  />
               )}
            </Form.Item>
         </Col>
      );
      children3.push(
         <Col span={12} key={"departure"}>
            <Form.Item
               label={`Departure: `}
               className="ant-form-item-control-wrapper"
            >
               {getFieldDecorator(`departure`, {
                  rules: [
                     {
                        required: true,
                        message: "Select date and time!"
                     }
                  ]
               })(
                  <DatePicker
                     name="departureDay"
                     showTime
                     format="YYYY-MM-DD HH:mm:ss"
                     onChange={this.onChangeDate}
                     onOk={this.onOk}
                  />
               )}
            </Form.Item>
         </Col>
      );

      children = (
         <div>
            <Row gutter={[0, 0]}>{children1}</Row>
            <Row gutter={[0, 0]}>{children2}</Row>
            <Row gutter={[0, 0]}>{children3}</Row>
         </div>
      );
      return children;
   }

   onChange = event => {
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState({ [name]: value });
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

         // Should format date value before submit.
         const rangeValue = fieldsValue["range-picker"];
         const rangeTimeValue = fieldsValue["range-time-picker"];
         const values = {
            ...fieldsValue,
            "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
            "date-time-picker": fieldsValue["date-time-picker"].format(
               "YYYY-MM-DD HH:mm:ss"
            ),
            "month-picker": fieldsValue["month-picker"].format("YYYY-MM"),
            "range-picker": [
               rangeValue[0].format("YYYY-MM-DD"),
               rangeValue[1].format("YYYY-MM-DD")
            ],
            "range-time-picker": [
               rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
               rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss")
            ],
            "time-picker": fieldsValue["time-picker"].format("HH:mm:ss")
         };
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
      const { getFieldDecorator } = this.props.form;
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
      const config = {
         rules: [
            { type: "object", required: true, message: "Please select time!" }
         ]
      };
      const rangeConfig = {
         rules: [
            { type: "array", required: true, message: "Please select time!" }
         ]
      };
      const { onCancle } = this.props;
      return (
         <Form
            {...formItemLayout}
            onSubmit={this.handleSubmit}
            className="ant-form-new-tour"
         >
            {this.getFields()}
            <Row>
               <Col span={24} style={{ textAlign: "right" }}>
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
                  {/* <a
                     style={{ marginLeft: 8, fontSize: 12 }}
                     onClick={this.toggle}
                  >
                     Collapse <Icon type={this.state.expand ? "up" : "down"} />
                  </a> */}
               </Col>
            </Row>
         </Form>
      );
   }
}

export default TableNewRow = Form.create({ name: "new_tour" })(TableNewRow);
