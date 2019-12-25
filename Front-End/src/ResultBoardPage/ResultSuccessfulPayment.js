import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Result, Button } from "antd";

export default class ResultSuccessful extends Component {
   render() {
      // const { params } = this.props.match;
      return (
         <Result
            status={`success`}
            title={<div>Tour của bạn đã được thanh toán thành công!</div>}
            subTitle={
               <div>
                  {`Tour của bạn đã được thanh toán!`}
                  <p>
                     Chúng tôi sẽ gửi mail cho bạn để xác nhận đã thanh toán với
                     mã PIN và đơn hàng, Xin hãy kiểm tra và lưu lại!
                  </p>
               </div>
            }
            extra={[
               <Link key="extra" to={{ pathname: "/" }}>
                  <Button type="dashed" key="console">
                     Đi đến trang chủ
                  </Button>
               </Link>
            ]}
         />
      );
   }
}
