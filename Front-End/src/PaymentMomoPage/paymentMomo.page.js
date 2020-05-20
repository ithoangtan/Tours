import React, { Component } from "react";
import * as INDEX_CONSTANTS from "../_constants/index.constants";
import funcLoadJs from "../_constants/loadJs.constants";
import { Typography } from "antd";
const { Title } = Typography;

class PaymentMomoPage extends Component {
   componentWillMount() {
      window.scrollTo({
         top: 0,
         left: 0,
      });
      funcLoadJs(INDEX_CONSTANTS.CustomerArrayExternalScript);
   }

   render() {
      return (
         <section className="ftco-section">
            <div className="row justify-content-center">
               <img
                  src="/payment/logo-momo.jfif"
                  alt="momo"
                  style={{ width: "auto", height: 235 }}
               />
            </div>
            <div className="row justify-content-center pb-1 mt-4">
               <Title level={3}>Đã thanh toán thành công</Title>
               <i class="fas fa-check-circle check-circle-momo"></i>
            </div>
         </section>
      );
   }
}

export default PaymentMomoPage;
