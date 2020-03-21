import React, { Component } from "react";

import { Redirect, Link } from "react-router-dom";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as orderActions from "../_actions/order.actions";

import { Button, Steps, message, Checkbox } from "antd";

import BookTourStep1 from "./bookTourStep1";
import BookTourStep2 from "./bookTourStep2";
import BookTourStep3 from "./bookTourStep3";

import funcLoadJs from "../_constants/loadJs.constants";
import * as INDEX_CONSTANTS from "../_constants/index.constants";

const { Step } = Steps;

const stepStyle = {
   marginBottom: 18,
   boxShadow: "0px -1px 0 0 #e8e8e8 inset"
};

let PIN = Date.now();
class BookTourContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         current: 0,
         step2OK: false,
         redirectResult: false
      };
   }

   //steps container
   next() {
      if (!this.state.step2OK && this.state.current === 1) {
         message.error(
            "Vui lòng nhập đầy đủ thông tin và xác nhận trước khi đến bước tiếp theo! next"
         );
         return;
      } else {
         const current = this.state.current + 1;
         this.setState({ current });
         // this.setState({ current, step2OK: false });
         funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
      }
   }

   step2OK() {
      this.setState({ step2OK: true });
      //Lưu xuống data base nữa nha
      const { tourById } = this.props;
      let newOrder = JSON.parse(localStorage.getItem("orders"));
      newOrder.address = JSON.stringify(newOrder.address);
      PIN = Date.now();
      let order = {
         ...newOrder,
         status: "verify",
         PIN: PIN,
         notes: " ",
         totalPrice: tourById.price,
         idAccount: 8, //test account,
         buyer: newOrder.name,
         idTour: tourById.idTour
      };
      const { orderAllActions } = this.props;
      const { fetchGetLinkPaymentRequest } = orderAllActions;
      const data = { order: { ...order }, tour: { ...tourById } };
      fetchGetLinkPaymentRequest(data);
   }

   prev() {
      const current = this.state.current - 1;
      this.setState({ current });
      funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
   }
   onChange = current => {
      if (!this.state.step2OK && this.state.current === 1) {
         message.error(
            "Vui lòng nhập đầy đủ thông tin và xác nhận trước khi đến bước tiếp theo!"
         );
         return;
      }
      this.setState({ current });
      funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
   };

   //end step container

   orderList = () => {
      const { tourById, listImageByIdTour } = this.props;
      return (
         <BookTourStep1
            tourById={tourById}
            listImageByIdTour={listImageByIdTour}
         />
      );
   };

   //Step 2: Your information
   orderInfo = () => {
      return <BookTourStep2 step2OK={() => this.step2OK()} />;
   };

   orderFinish = () => {
      return <BookTourStep3 data={this.props.data} payment={true} />;
   };

   statusOrder = current => {
      let status = "";
      if (current === 1) status = "";
      if (current === 2) status = "";
      return status;
   };

   //Done
   onDone = () => {
      message.success("Processing complete!");
      this.setState({ redirectResult: true });
      //save xuống data
   };
   onRedirect() {
      localStorage.setItem("PIN", PIN);
      if (this.state.redirectResult) {
         this.setState({ redirectResult: false });
         return (
            <Redirect
               to={{
                  pathname: `/successfulResult/${PIN}`,
                  // search: `?idOrder=${PIN}`,
                  state: { done: true }
               }}
            />
         );
      }
   }

   componentWillMount() {
      const mess = window.location.search;
      if (mess) {
         message.warning(
            "Bạn đã hủy thanh toán trước đó, Hãy thử lại bằng cách khác nhé!",
            8
         );
         this.setState({ current: 1 });
      }
   }

   render() {
      const { current } = this.state;

      const steps = [
         {
            title: "Check Your Order",
            status: this.statusOrder(current),
            description: "Estimaed: 00:00:10",
            content: this.orderList()
         },
         {
            title: "Your Information",
            status: this.statusOrder(current),
            description: "Estimaed: 00:02:00",
            content: this.orderInfo()
         },
         {
            title: "Payments Method",
            // subTitle: "00:05:00",
            status: this.statusOrder(current),
            description: "Estimaed: 00:02:00",
            content: this.orderFinish()
         }
      ];

      return (
         <div className="book-tour-container container">
            {this.onRedirect()}
            <Steps
               current={current}
               type="navigation"
               size="small"
               onChange={this.onChange}
               style={stepStyle}
            >
               {steps.map(item => (
                  <Step
                     key={item.title}
                     title={item.title}
                     subTitle={item.subTitle}
                     status={item.status}
                     description={item.description}
                  />
               ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
               <div className="ht-policy-check">
                  <Checkbox checked>
                     Đồng ý với{" "}
                     <Link to="#" className="ht-text-underline">
                        điều khoản và chính sách
                     </Link>{" "}
                     của chúng tôi và
                     <Link to="#" className="ht-text-underline">
                        {" "}
                        điều khoản bắt buộc khi thanh toán online
                     </Link>
                  </Checkbox>
               </div>
               {current > 0 && (
                  <Button
                     style={{ marginRight: 8 }}
                     onClick={() => this.prev()}
                  >
                     Previous
                  </Button>
               )}
               {current < steps.length - 1 && (
                  <Button type="primary" onClick={() => this.next()}>
                     Next
                  </Button>
               )}
               {current === steps.length - 1 && (
                  <Button type="primary" onClick={this.onDone}>
                     Done
                  </Button>
               )}
            </div>
         </div>
      );
   }
}

BookTourContainer.propTypes = {
   classes: PropTypes.object,
   orderAllActions: PropTypes.shape({
      fetchGetLinkPaymentRequest: PropTypes.func
   }),
   listOrder: PropTypes.array
};

const mapStateToProps = state => {
   return {
      listTour: state.order.listOrder,
      data: state.order.data
      //data: .link, .message, .order, .tour
   };
};
const mapDispatchToProps = dispatch => {
   return {
      orderAllActions: bindActionCreators(orderActions, dispatch)
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookTourContainer);
