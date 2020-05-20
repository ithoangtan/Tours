import React, { Component } from "react";

import {
   Input,
   Tooltip,
   Cascader,
   InputNumber,
   Button,
   message,
   Form,
   Icon,
} from "antd";

import { mapAddressToOptionAntd } from "./addressVN";
import NumberFormat from "react-number-format";

class BookTourStep2 extends Component {
   state = {
      confirmDirty: false,
      autoCompleteResult: [],
      sizeWindow: "large",
      numAdult: 1,
      numChild: 0,
      numChild2To6Age: 0,
      numChildYounger2Age: 0,
      totalPrice: 0,
   };

   componentWillMount() {
      this.setState({
         sizeWindow: window.innerWidth > 757.98 ? "default" : "small",
      });
   }

   componentDidMount() {
      this.calTotalPrice();
   }

   handleSubmit = (e) => {
      e.preventDefault();
      const { numAdult, numChild, totalPrice } = this.state;
      this.props.form.validateFieldsAndScroll((err, values) => {
         const newValues = {
            ...values,
            numberPeople: numAdult,
            numberChildren: numChild,
            totalPrice,
         };
         if (!err) {
            message.success("OK! Bây giờ bạn có thể đến bước tiếp theo rồi");
            //Lưu thông tin vào storage
            localStorage.setItem("orders", JSON.stringify(newValues));
            //Đến khi người dùng ấn done mới tiến hành lưu xuống CSDL
            this.props.step2OK();
         }
      });
   };

   handleConfirmBlur = (e) => {
      const { value } = e.target;
      this.setState({
         confirmDirty: this.state.confirmDirty || !!value,
      });
   };

   calTotalPrice = () => {
      const { numAdult, numChild } = this.state;
      const { tourById } = this.props;
      const officalPrice = tourById.price * (1 - tourById.sale * 0.01);
      const newTotalPrice = officalPrice * (numAdult + numChild * 0.5);
      this.setState({ totalPrice: newTotalPrice });
   };

   onChangeNumAdult = async (value) => {
      await this.setState({ numAdult: value });
      this.calTotalPrice();
   };

   onChangeNumChild = async (value) => {
      await this.setState({ numChild: value });
      this.calTotalPrice();
   };

   onChangeNumChild2To6Age = async (value) => {
      await this.setState({ numChild2To6Age: value });
      this.calTotalPrice();
   };

   onChangeNumChildYounger2Age = async (value) => {
      await this.setState({ numChildYounger2Age: value });
      this.calTotalPrice();
   };

   initValue(name) {
      const orders = JSON.parse(localStorage.getItem("orders"));
      if (localStorage.getItem("orders")) {
         if (name === "name") return orders.name;
         if (name === "email") return orders.email;
         if (name === "phone") return orders.phone;
         if (name === "numberPeople") return orders.numberPeople;
         if (name === "numberChildren") return orders.numberChildren;
         if (name === "address")
            return [orders.address[0], orders.address[1], orders.address[2]];
      } else {
         if (name === "numberPeople") return 1;
         if (name === "numberChildren") return 0;
      }
   }

   render() {
      const { getFieldDecorator } = this.props.form;
      const { tourById } = this.props;
      const {
         numAdult,
         numChild,
         numChild2To6Age,
         numChildYounger2Age,
         totalPrice,
      } = this.state;
      const formItemLayout = {
         labelCol: {
            offset: 1,
            xs: { span: 24 },
            sm: { span: 8 },
            md: { span: 8 },
            lg: { span: 7 },
            xl: { span: 7 },
            xxl: { span: 7 },
         },
         wrapperCol: {
            flex: 4,
            xs: { span: 24 },
            sm: { span: 16 },
            md: { span: 16 },
            lg: { span: 16 },
            xl: { span: 16 },
            xxl: { span: 16 },
         },
      };
      const officalPrice = tourById.price * (1 - tourById.sale * 0.01);
      const { sizeWindow } = this.state;
      return (
         <Form
            {...formItemLayout}
            layout="horizontal"
            initialValues={{
               size: sizeWindow,
            }}
            size={sizeWindow}
            onSubmit={this.handleSubmit}
         >
            <div className="ht-d-flex-col-start-start">
               <div className="ht-book-tour-info-container container">
                  <div className="ht-book-tour-info-left container">
                     <Form.Item
                        label={
                           <span>
                              Tên&nbsp;
                              <Tooltip title="Bạn sẽ được chúng tôi gọi là?">
                                 <Icon type="question-circle-o" />
                              </Tooltip>
                           </span>
                        }
                        style={{ paddingBottom: 12 }}
                     >
                        {getFieldDecorator("name", {
                           initialValue: this.initValue("name"),
                           rules: [
                              {
                                 required: true,
                                 message:
                                    "Xin hãy cho chúng tôi biết tên của bạn!",
                              },
                           ],
                        })(<Input placeholder="Họ và tên của bạn" />)}
                     </Form.Item>
                     <Form.Item label="E-mail" style={{ paddingBottom: 12 }}>
                        {getFieldDecorator("email", {
                           initialValue: this.initValue("email"),
                           rules: [
                              {
                                 type: "email",
                                 message: "Hãy nhập một E-mail hợp lệ á nè!",
                              },
                              {
                                 required: true,
                                 message:
                                    "Xin hãy cho chúng tôi biết E-mail của bạn!",
                              },
                           ],
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
                        style={{ paddingBottom: 12 }}
                     >
                        {getFieldDecorator("address", {
                           initialValue: this.initValue("address"),
                           rules: [
                              {
                                 type: "array",
                                 required: true,
                                 message: "Xin hãy chọn nơi cư trú của bạn!",
                              },
                           ],
                        })(
                           <Cascader
                              style={{ width: "100%" }}
                              options={mapAddressToOptionAntd()}
                              placeholder="Hãy chọn nơi cư trú của bạn"
                           />
                        )}
                     </Form.Item>
                  </div>
                  <div className="ht-book-tour-info-right container">
                     <Form.Item
                        label={
                           <span>
                              Số điện thoại&nbsp;
                              <Tooltip title="Có thể chúng tôi sẽ gọi cho bạn!">
                                 <Icon type="question-circle-o" />
                              </Tooltip>
                           </span>
                        }
                        style={{ paddingBottom: 12 }}
                     >
                        {getFieldDecorator("phone", {
                           initialValue: this.initValue("phone"),
                           rules: [
                              {
                                 required: true,
                                 message:
                                    "Có thể cho chúng tôi số điện thoại để liên hệ chứ!",
                              },
                           ],
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
                        style={{ paddingBottom: 12 }}
                     >
                        {getFieldDecorator("numberPeople", {
                           initialValue: this.initValue("numberPeople"),
                        })(
                           <>
                              <Tooltip
                                 trigger="focus"
                                 title={
                                    <>
                                       trên 1,2m là
                                       <NumberFormat
                                          value={officalPrice}
                                          displayType={"text"}
                                          thousandSeparator={true}
                                          prefix=" "
                                          suffix={" VNĐ / khách"}
                                       />
                                    </>
                                 }
                              >
                                 <i
                                    className="fas fa-user-tie pr-1"
                                    style={{ width: "10%", textAlign: "right" }}
                                 ></i>
                                 <InputNumber
                                    placeholder="Người lớn"
                                    style={{ width: "40%" }}
                                    min={0}
                                    max={100}
                                    name="numAdult"
                                    value={numAdult}
                                    onChange={this.onChangeNumAdult}
                                 />
                              </Tooltip>
                              <Tooltip
                                 trigger="focus"
                                 title={
                                    <>
                                       dưới 1,2m là
                                       <NumberFormat
                                          value={officalPrice * 0.5}
                                          displayType={"text"}
                                          thousandSeparator={true}
                                          prefix=" "
                                          suffix={" VNĐ / khách"}
                                       />
                                    </>
                                 }
                              >
                                 <i
                                    className="fas fa-male pl-2 pr-1"
                                    style={{ width: "10%", textAlign: "right" }}
                                 ></i>
                                 <InputNumber
                                    placeholder="Trẻ em"
                                    style={{ width: "40%" }}
                                    min={0}
                                    max={100}
                                    name="numChild"
                                    value={numChild}
                                    onChange={this.onChangeNumChild}
                                 />
                              </Tooltip>
                           </>
                        )}
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
                        style={{ paddingBottom: 12 }}
                     >
                        {getFieldDecorator("numberChildren", {
                           initialValue: this.initValue("numberChildren"),
                        })(
                           <>
                              <Tooltip
                                 trigger="focus"
                                 placement="bottom"
                                 title={
                                    <>
                                       từ 2 - 6 tuổi là
                                       <NumberFormat
                                          value={officalPrice * 0}
                                          displayType={"text"}
                                          thousandSeparator={true}
                                          prefix=" "
                                          suffix={" VNĐ / khách"}
                                       />
                                    </>
                                 }
                              >
                                 <i
                                    className="fas fa-child pr-1 pl-1"
                                    style={{ width: "10%", textAlign: "right" }}
                                 ></i>
                                 <InputNumber
                                    placeholder="Trẻ nhỏ"
                                    style={{ width: "40%" }}
                                    min={0}
                                    max={100}
                                    name="numChild2To6Age"
                                    value={numChild2To6Age}
                                    onChange={this.onChangeNumChild2To6Age}
                                 />
                              </Tooltip>
                              <Tooltip
                                 trigger="focus"
                                 placement="bottom"
                                 title={
                                    <>
                                       {" "}
                                       dưới 2 tuổi là
                                       <NumberFormat
                                          value={officalPrice * 0}
                                          displayType={"text"}
                                          thousandSeparator={true}
                                          prefix=" "
                                          suffix={" VNĐ / khách"}
                                       />
                                    </>
                                 }
                              >
                                 <i
                                    className="fas fa-baby pr-1 pl-1"
                                    style={{ width: "10%", textAlign: "right" }}
                                 ></i>
                                 <InputNumber
                                    placeholder="Em bé"
                                    style={{ width: "40%" }}
                                    min={0}
                                    max={100}
                                    name="numChildYounger2Age"
                                    value={numChildYounger2Age}
                                    onChange={this.onChangeNumChildYounger2Age}
                                 />
                              </Tooltip>
                           </>
                        )}
                     </Form.Item>
                  </div>
               </div>
               <div className="ht-price-total-and-comfirm">
                  <p className="ht-price-total">
                     Tổng giá:{" "}
                     <NumberFormat
                        value={totalPrice}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix={" VNĐ"}
                     />
                  </p>
                  <Form.Item
                     style={{
                        paddingBottom: 12,
                        paddingRight: "30px",
                     }}
                  >
                     <Tooltip
                        placement="bottom"
                        title={"Thông tin của bạn sẽ được bảo mật!"}
                     >
                        <Button type="primary" htmlType="submit">
                           Xác nhận thông tin của bạn là chính xác!
                        </Button>
                     </Tooltip>
                  </Form.Item>
               </div>
            </div>
         </Form>
      );
   }
}

const WrappedBookTourStep2 = Form.create({ name: "bookstep2" })(BookTourStep2);

export default WrappedBookTourStep2;
